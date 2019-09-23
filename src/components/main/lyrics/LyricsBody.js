import React, { Component } from "react";
import LyricsBar from "./LyricsBar";
import BarAnimation from "./logic/BarAnimation";
import ScrollAnimation from "./logic/ScrollAnimation";
import ProgressBarAnimation from "./logic/ProgressBarAnimation";
import styled from "styled-components";
import { colorScheme, space } from "../../style";
import Countdown from "./Countdown";
import Counter from "./Counter";
import { counterSetSongTiming } from "../../../redux/actions";
import { connect } from "react-redux";

const LyricsBodyContainer = styled.div`
    position: relative;
`;

const LyricsBodyElement = styled.div`
    height: 240px;
    overflow-y: ${props => props.scrollY};
    overflow-x: hidden;
`;

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 8px;
    background: ${props => colorScheme[props.colorSchemeNo].muted};
    overflow: hidden;
    margin-top: ${space.s5};
    border-radius: 4px;
`;
const ProgressBarElement = styled.div`
    height: 8px;
    background: ${props => colorScheme[props.colorSchemeNo].contrast1};
    width: 0%;
`;

class LyricsBody extends Component {
    state = {
        markedSectionIndex: 0
    };

    componentWillMount() {
        const { lyricsData } = this.props.redux;

        const { counterSetSongTiming } = this.props;

        this.lyricsBody = React.createRef();

        this.progressBarElement = React.createRef();

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

        this.progressBarAnimation = new ProgressBarAnimation(
            this.lyricsBody.current,
            this.progressBarElement.current
        );
    }

    handleScroll() {
        const currentlyMarkedSectionIndex = this.barAnimation.animate();

        if (this.state.markedSectionIndex !== currentlyMarkedSectionIndex) {
            this.setState({ markedSectionIndex: currentlyMarkedSectionIndex });
        }

        this.progressBarAnimation.updateProgressBar();
    }
    handleScroll = this.handleScroll.bind(this);

    render() {
        const {
            lyricsData,
            counterIsRun,
            songTiming,
            colorSchemeNo
        } = this.props.redux;

        const lyricsBars = () => {
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
            <div>
                {counterIsRun ? (
                    <Counter
                        onBarChange={() =>
                            this.scrollAnimation.animate(
                                (60 / lyricsData.tempo) * 1000 * songTiming,
                                this.state.markedSectionIndex + 1
                            )
                        }
                        markedSectionIndex={this.state.markedSectionIndex}
                        lastSectionIndex={lyricsBars().length - 1}
                    />
                ) : null}
                <LyricsBodyContainer>
                    <Countdown />
                    <LyricsBodyElement
                        ref={this.lyricsBody}
                        onScroll={this.handleScroll}
                        scrollY={counterIsRun ? "hidden" : "scroll"}
                    >
                        {lyricsBars()}
                    </LyricsBodyElement>
                </LyricsBodyContainer>
                <ProgressBarContainer colorSchemeNo={colorSchemeNo}>
                    <ProgressBarElement
                        colorSchemeNo={colorSchemeNo}
                        ref={this.progressBarElement}
                    ></ProgressBarElement>
                </ProgressBarContainer>
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
)(LyricsBody);
