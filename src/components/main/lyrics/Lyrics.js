import React, { Component } from "react";
import LyricsBar from "./LyricsBar";
import SectionAnimation from "./logic/section-animation";
import ScrollAnimation from "./logic/scroll-animation";
import styled from "styled-components";
import v from "../../style_abstract/variables";
import Metronom from "./metronom/Metronom";
import Countdown from "./Countdown";
import Counter from "./Counter";
import { counterSetSongTiming } from "../../../redux/actions";
import { connect } from "react-redux";

const LyricsHeader = styled.div`
    margin: ${v.space.s4} 0;
`;

const H2 = styled.h2`
    margin-bottom: ${v.space.s2};
`;

const LyricsBodyContainer = styled.div`
    position: relative;
`;

const LyricsBody = styled.div`
    height: 240px;
    overflow-y: ${props => props.scrollY};
    overflow-x: hidden;
    background-color: ${v.color.mintcream};
`;

class Lyrics extends Component {
    state = {
        markedSectionIndex: 0
    };

    lyricsBody = React.createRef();

    componentWillMount() {
        this.songTiming = () => {
            const slashIndex = this.props.redux.lyricsData.time.search("/");
            const meterString = this.props.redux.lyricsData.time.substring(
                0,
                slashIndex
            );
            return Number(meterString);
        };
        this.props.counterSetSongTiming(this.songTiming());
    }

    componentDidMount() {
        this.scrollAnimation = new ScrollAnimation(
            this.lyricsBody.current,
            () => {
                return this.props.redux.counterIsRun;
            }
        );
        this.sectionAnimation = new SectionAnimation(this.lyricsBody.current);
    }

    handleScroll() {
        const currentlyMarkedSectionIndex = this.sectionAnimation.animate();
        if (this.state.markedSectionIndex !== currentlyMarkedSectionIndex) {
            this.setState({ markedSectionIndex: currentlyMarkedSectionIndex });
        }
    }
    handleScroll = this.handleScroll.bind(this);

    render() {
        const lyricsSections = () => {
            const sectionsData = this.props.redux.lyricsData.sections;

            const barsData = sectionsData.map(item => {
                const barType = item.name;
                return item.bars.map(item => {
                    return { barType, text: item.text, chords: item.chords };
                });
            });

            const barsDataReduced = barsData.reduce((total, item) => {
                return total.concat(item);
            });

            const bars = barsDataReduced.map((item, index) => {
                return (
                    <LyricsBar
                        key={index}
                        text={item.text}
                        chords={item.chords}
                        barType={item.barType}
                    />
                );
            });
            return bars;
        };

        const scrollY = this.props.redux.counterIsRun ? "hidden" : "scroll";

        const counter = this.props.redux.counterIsRun ? (
            <Counter
                onBarChange={() =>
                    this.scrollAnimation.animate(
                        (60 / this.props.redux.lyricsData.tempo) *
                            1000 *
                            this.props.redux.songTiming,
                        this.state.markedSectionIndex + 1
                    )
                }
                markedSectionIndex={this.state.markedSectionIndex}
                lastSectionIndex={lyricsSections().length - 1}
            />
        ) : (
            ""
        );

        return (
            <div>
                {counter}
                <LyricsHeader>
                    <H2>
                        {this.props.redux.lyricsData.title}
                        <a
                            className="lyrics-info-item"
                            href={this.props.redux.lyricsData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icon icon-youtube" />
                        </a>
                    </H2>
                    <p className="lyrics-info row">
                        <span className="lyrics-info-item col">
                            Tempo: {this.props.redux.lyricsData.tempo}
                        </span>
                        <span className="lyrics-info-item col">
                            Time: {this.props.redux.lyricsData.time}
                        </span>
                    </p>
                </LyricsHeader>
                <LyricsBodyContainer>
                    <Countdown />
                    <LyricsBody
                        ref={this.lyricsBody}
                        onScroll={this.handleScroll}
                        scrollY={scrollY}
                    >
                        {lyricsSections()}
                    </LyricsBody>
                </LyricsBodyContainer>
                <Metronom counter={this.counter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { redux: state };
};
const mapDispatchToProps = {
    counterSetSongTiming
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lyrics);
