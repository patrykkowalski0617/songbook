import React, { Component } from "react";
import LyricsSection from "./LyricsSection";

import SectionAnimation from "./logic/section-animation";
import ScrollAnimation from "./logic/scroll-animation";

class Lyrics extends Component {
    state = { markedSectionIndex: 0 };

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
        const tt = this;
        this.scrollAnimation = new ScrollAnimation(
            this.lyricsBody.current,
            this.lyricsSections,
            this.state.markedSectionIndex,
            function() {
                tt.counter.data.allowRestart = false;
            },
            function() {
                tt.counter.data.allowRestart = true;
            }
        );

        this.counter.data.callbackOn.barChange = function() {
            const time = tt.counter.data.songTiming() * 1000 - 100;
            tt.scrollAnimation.anim(time);
        };

        this.sectionAnimation = new SectionAnimation(
            this.lyricsBody.current,
            this.lyricsSections
        );
        this.sectionAnimation.anim();
    }

    handleScroll() {
        const currentlyMarkedSectionIndex = this.sectionAnimation.anim();

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

            return (
                <LyricsSection
                    key={index}
                    text={currentBar.text}
                    chords={currentBar.chords}
                    getLyricsSections={this.getLyricsSections}
                />
            );
        });

        return (
            <div className="lyrics">
                <div className="lyrics-header">
                    <h2>
                        {this.counter.lyricsData.title}
                        <a
                            className="lyrics-info-item"
                            href={this.counter.lyricsData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icon icon-youtube" />
                        </a>
                    </h2>
                    <p className="lyrics-info row">
                        <span className="lyrics-info-item col">
                            Tempo: {this.counter.lyricsData.tempo}
                        </span>
                        <span className="lyrics-info-item col">
                            Time: {this.counter.lyricsData.time}
                        </span>
                    </p>
                </div>
                <div
                    className="lyrics-body"
                    ref={this.lyricsBody}
                    onScroll={this.handleScroll}
                >
                    {lyricsSections}
                </div>
            </div>
        );
    }
}

export default Lyrics;
