import React, { Component } from "react";
import LyricsBar from "./LyricsBar";
import BarAnimation from "./logic/BarAnimation";
import ScrollAnimation from "./logic/ScrollAnimation";
import styled from "styled-components";
import { space, grid } from "../../style";
import Metronom from "./Metronom";
import Countdown from "./Countdown";
import Counter from "./Counter";
import ProgressBar from "./ProgressBar";
import ScrollProgress from "./logic/ScrollProgress";
import { counterSetSongTiming } from "../../../redux/actions";
import { connect } from "react-redux";

const LyricsElement = styled.div`
    position: absolute;
    left: ${space.s2};
    right: ${space.s2};
    top: 50%;
    transform: translateY(-50%);
`;

const LyricsHeader = styled.div`
    margin: ${space.s4} 0;
`;

const LyricsData = styled.p`
    ${grid.row}
`;

const LyricsDataContent = styled.span`
    ${grid.col[0]}
`;

const H2 = styled.h2`
    margin-bottom: ${space.s2};
`;

const LyricsBodyContainer = styled.div`
    position: relative;
`;

const LyricsBody = styled.div`
    height: 240px;
    overflow-y: ${props => props.scrollY};
    overflow-x: hidden;
`;

class Lyrics extends Component {
    state = {
        markedSectionIndex: 0,
        scrollProgress: "0%"
    };

    componentWillMount() {
        const { lyricsData } = this.props.redux;

        const { counterSetSongTiming } = this.props;

        this.lyricsBody = React.createRef();

        this.songTiming = () => {
            const slashIndex = lyricsData.time.search("/");
            const meterString = lyricsData.time.substring(0, slashIndex);
            return Number(meterString);
        };

        counterSetSongTiming(this.songTiming());
    }

    componentDidMount() {
        this.scrollAnimation = new ScrollAnimation(
            this.lyricsBody.current,
            () => {
                return this.props.redux.counterIsRun;
            }
        );

        this.barAnimation = new BarAnimation(this.lyricsBody.current);
    }

    handleScroll() {
        const currentlyMarkedSectionIndex = this.barAnimation.animate();

        const scrollProgress = ScrollProgress(this.lyricsBody.current);

        this.setState({ scrollProgress });

        if (this.state.markedSectionIndex !== currentlyMarkedSectionIndex) {
            this.setState({ markedSectionIndex: currentlyMarkedSectionIndex });
        }
    }
    handleScroll = this.handleScroll.bind(this);

    render() {
        const { lyricsData, counterIsRun, songTiming } = this.props.redux;

        const lyricsSections = () => {
            const barsData = lyricsData.bars;

            const barsDataSmoothed = barsData.map(item => {
                const barType = item.name;
                return item.bars.map(item => {
                    return { barType, text: item.text, chords: item.chords };
                });
            });

            const barsDataReduced = barsDataSmoothed.reduce((total, item) => {
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

        return (
            <LyricsElement>
                {counterIsRun ? (
                    <Counter
                        onBarChange={() =>
                            this.scrollAnimation.animate(
                                (60 / lyricsData.tempo) * 1000 * songTiming,
                                this.state.markedSectionIndex + 1
                            )
                        }
                        markedSectionIndex={this.state.markedSectionIndex}
                        lastSectionIndex={lyricsSections().length - 1}
                    />
                ) : null}
                <LyricsHeader>
                    <H2>
                        {lyricsData.title}
                        <a
                            href={lyricsData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icon icon-youtube" />
                        </a>
                    </H2>
                    <LyricsData>
                        <LyricsDataContent>
                            Tempo: {lyricsData.tempo}
                        </LyricsDataContent>
                        <LyricsDataContent>
                            Time: {lyricsData.time}
                        </LyricsDataContent>
                    </LyricsData>
                </LyricsHeader>
                <LyricsBodyContainer>
                    <Countdown />
                    <LyricsBody
                        ref={this.lyricsBody}
                        onScroll={this.handleScroll}
                        scrollY={counterIsRun ? "hidden" : "scroll"}
                    >
                        {lyricsSections()}
                    </LyricsBody>
                </LyricsBodyContainer>
                <ProgressBar scrollProgress={this.state.scrollProgress} />
                <Metronom />
            </LyricsElement>
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
