import React, { Component } from "react";
import { LyricsBar, Countdown, Counter } from "./";
import { BarAnimation, ScrollAnimation, ProgressBarAnimation } from "./logic/";
import styled from "styled-components";
import { colorScheme, space, lyricsBarH } from "../../style";
import {
    counterSetSongTiming,
    lyricsLastBarIsMarked
} from "../../../redux/actions";
import { connect } from "react-redux";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const LyricsBodyContainer = styled.div`
    position: relative;
    .ps .ps__rail-y:hover,
    .ps .ps__rail-y.ps--clicking {
        background: ${props =>
            colorScheme[props.colorSchemeNo].muted} !important;
        opacity: 1;
    }
    .ps__thumb-y {
        background: ${props =>
            colorScheme[props.colorSchemeNo].contrast1} !important;
    }
    .ps__rail-y {
        margin-top: 5px;
        margin-bottom: 5px;
        &::before,
        &::after {
            content: "";
            background: inherit;
            display: block;
            width: 100%;
            height: 5px;
            position: absolute;
        }
        &::after {
            bottom: -5px;
            border-radius: 0 0 5px 5px;
        }
        &::before {
            top: -5px;
            border-radius: 5px 5px 0 0;
        }
    }
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
        const {
            counterSetSongTiming,
            redux: { lyricsData }
        } = this.props;

        this.lyricsBodyRef = React.createRef();
        this.perfectScrollContainerRef = React.createRef();
        this.progressBarElementRef = React.createRef();

        this.songTiming = () => {
            const slashIndex = lyricsData.time.search("/");
            const meterString = lyricsData.time.substring(0, slashIndex);
            return Number(meterString);
        };

        counterSetSongTiming(this.songTiming());
    }

    componentDidMount() {
        const perfectScrollContainer = this.perfectScrollContainerRef.current
            ._ps.element;

        const progressBar = this.progressBarElementRef.current;

        this.scrollAnimation = new ScrollAnimation(
            perfectScrollContainer,
            () => {
                return this.props.redux.counterIsRun;
            }
        );

        this.barAnimation = new BarAnimation(perfectScrollContainer);

        this.progressBarAnimation = new ProgressBarAnimation(
            perfectScrollContainer,
            progressBar
        );
    }

    indexOfLastBar = 0;

    handleScroll() {
        const currentlyMarkedSectionIndex = this.barAnimation.animate();
        const {
            lyricsLastBarIsMarked,
            redux: { lyricsIsLastBarMarked }
        } = this.props;

        if (this.state.markedSectionIndex !== currentlyMarkedSectionIndex) {
            this.setState({ markedSectionIndex: currentlyMarkedSectionIndex });
            if (currentlyMarkedSectionIndex === this.indexOfLastBar) {
                lyricsLastBarIsMarked(true);
            } else if (lyricsIsLastBarMarked) {
                lyricsLastBarIsMarked(false);
            }
        }

        this.progressBarAnimation.updateProgressBar();
    }
    handleScroll = this.handleScroll.bind(this);

    render() {
        const {
            redux: {
                lyricsData,
                counterIsRun,
                songTiming,
                colorSchemeNo,
                counterIterationNumber,
                counterScrollDelay
            }
        } = this.props;

        const displayCountdown =
            counterIsRun &&
            counterIterationNumber + 1 <= counterScrollDelay * songTiming;

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
                let marginBottom, marginTop, opacity;
                if (index === barsDataReduced.length - 1) {
                    marginBottom = lyricsBarH;
                } else if (index === 0) {
                    marginTop = lyricsBarH;
                }

                if (displayCountdown) {
                    opacity = ".2";
                }

                return (
                    <LyricsBar
                        key={index}
                        text={item.text}
                        chords={item.chords}
                        barType={item.barType}
                        style={{ marginBottom, marginTop, opacity }}
                    />
                );
            });

            this.indexOfLastBar = bars.length - 1;

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
                        indexOfLastBar={this.indexOfLastBar}
                    />
                ) : null}
                <LyricsBodyContainer colorSchemeNo={colorSchemeNo}>
                    <Countdown displayCountdown={displayCountdown} />
                    <PerfectScrollbar
                        ref={this.perfectScrollContainerRef}
                        style={{ height: 240 }}
                        onScrollY={this.handleScroll}
                    >
                        {lyricsBars()}
                    </PerfectScrollbar>
                </LyricsBodyContainer>
                <ProgressBarContainer colorSchemeNo={colorSchemeNo}>
                    <ProgressBarElement
                        colorSchemeNo={colorSchemeNo}
                        ref={this.progressBarElementRef}
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
    counterSetSongTiming,
    lyricsLastBarIsMarked
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LyricsBody);
