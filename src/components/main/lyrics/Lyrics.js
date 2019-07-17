import React, { Component } from "react";
import LyricsSection from "./LyricsSection";

import SectionAnimation from "./logic/section-animation";
import ScrollAnimation from "./logic/scroll-animation";

class Lyrics extends Component {
    state = { markedSectionIndex: 0 };

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
                this.props.counter.data.allowRestart = false;
            },
            function() {
                this.props.counter.data.allowRestart = true;
            }
        );

        this.props.counter.data.callbackOn.barChange = function() {
            const time = this.props.counter.data.songTiming() * 1000 - 100;
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
            this.props.counter.data.currentlyMarkedSectionIndex = currentlyMarkedSectionIndex;
            this.props.counter.action.restart();
        }
    }
    handleScroll = this.handleScroll.bind(this);

    render() {
        const allLocations = this.props.counter.data.locationOfAllBars();

        const lyricsSections = allLocations.map((item, index) => {
            const currentBar = this.props.counter.lyricsData.sections[item[0]]
                .bars[item[1]];

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
                        {this.props.counter.lyricsData.title}
                        <a
                            className="lyrics-info-item"
                            href={this.props.counter.lyricsData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icon icon-youtube" />
                        </a>
                    </h2>
                    <p className="lyrics-info row">
                        <span className="lyrics-info-item col">
                            Tempo: {this.props.counter.lyricsData.tempo}
                        </span>
                        <span className="lyrics-info-item col">
                            Time: {this.props.counter.lyricsData.time}
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
