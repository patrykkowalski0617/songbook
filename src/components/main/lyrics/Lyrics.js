import React, { Component } from "react";
import LyricsSection from "./LyricsSection";
import SectionAnimation from "./logic/section-animation";
import ScrollAnimation from "./logic/scroll-animation";
import styled from "styled-components";
import v from "../../style_abstract/variables";
import Metronom from "./metronom/Metronom";
import Countdown from "./metronom/countdown/Countdown";

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
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: ${v.color.mintcream};
`;

class Lyrics extends Component {
    state = {
        markedSectionIndex: 0
    };

    counter = this.props.counter;

    lyricsBody = React.createRef();
    lyricsSections = [];
    getLyricsSections = function(item) {
        const lyricsSectionsList = this.lyricsSections.slice();
        const i = [item];
        this.lyricsSections = lyricsSectionsList.concat(i);
    };
    getLyricsSections = this.getLyricsSections.bind(this);

    componentDidMount() {
        const _this = this;
        this.scrollAnimation = new ScrollAnimation(
            this.lyricsBody.current,
            this.lyricsSections,
            this.state.markedSectionIndex,
            () => {
                this.counter.data.allowRestart = false;
            },
            () => {
                this.counter.data.allowRestart = true;
            },
            () => {
                return this.counter.isRun || this.counter.timeoutForScrollTop;
            }
        );
        this.time = _this.counter.data.songTiming() * 1000;
        this.counter.data.callbackOn.barChange = () => {
            this.scrollAnimation.animate(_this.time - 100);
        };
        this.counter.data.callbackOn.scrollToTop = () => {
            const time = 1000;
            this.scrollAnimation.animate(time, 0);
            return time;
        };
        this.setState({ countdownNumer: this.counter.data.songTiming() });
        this.sectionAnimation = new SectionAnimation(
            this.lyricsBody.current,
            this.lyricsSections
        );
        this.sectionAnimation.animate();
    }

    handleScroll() {
        const currentlyMarkedSectionIndex = this.sectionAnimation.animate();

        if (this.state.markedSectionIndex !== currentlyMarkedSectionIndex) {
            this.setState({ markedSectionIndex: currentlyMarkedSectionIndex });
            this.scrollAnimation.updateData(currentlyMarkedSectionIndex);
            this.counter.data.currentlyMarkedSectionIndex = currentlyMarkedSectionIndex;
            this.counter.action.restart();
        }
    }
    handleScroll = this.handleScroll.bind(this);

    render() {
        const allLocations = this.counter.data.locationOfAllBars();

        const lyricsSections = allLocations.map((item, index) => {
            const currentBar = this.counter.lyricsData.sections[item[0]].bars[
                item[1]
            ];
            const sectionName = this.counter.lyricsData.sections[item[0]].name;

            return (
                <LyricsSection
                    key={index}
                    text={currentBar.text}
                    chords={currentBar.chords}
                    sectionName={sectionName}
                    getLyricsSections={this.getLyricsSections}
                />
            );
        });

        return (
            <div>
                <LyricsHeader>
                    <H2>
                        {this.counter.lyricsData.title}
                        <a
                            className="lyrics-info-item"
                            href={this.counter.lyricsData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icon icon-youtube" />
                        </a>
                    </H2>
                    <p className="lyrics-info row">
                        <span className="lyrics-info-item col">
                            Tempo: {this.counter.lyricsData.tempo}
                        </span>
                        <span className="lyrics-info-item col">
                            Time: {this.counter.lyricsData.time}
                        </span>
                    </p>
                </LyricsHeader>
                <LyricsBodyContainer>
                    <Countdown counter={this.props.counter} />
                    <LyricsBody
                        ref={this.lyricsBody}
                        onScroll={this.handleScroll}
                    >
                        {lyricsSections}
                    </LyricsBody>
                </LyricsBodyContainer>
                <Metronom counter={this.props.counter} />
            </div>
        );
    }
}

export default Lyrics;
