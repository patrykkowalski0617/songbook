import React, { Component } from "react";
import LyricsSection from "./LyricsSection";

import counter from "../../../logic/counter";
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
                counter.data.allowRestart = false;
            },
            function() {
                counter.data.allowRestart = true;
            }
        );

        counter.data.callbackOn.barChange = function() {
            tt.scrollAnimation.anim(500);
        };

        this.sectionAnimation = new SectionAnimation(
            this.lyricsBody.current,
            this.lyricsSections
        );
        this.sectionAnimation.anim();
    }

    currentlyMarkedSectionIndex = null;

    handleScroll() {
        if (this.sectionAnimation.anim()) {
            this.currentlyMarkedSectionIndex = this.sectionAnimation.anim();
        }

        if (
            this.state.markedSectionIndex !== this.currentlyMarkedSectionIndex
        ) {
            this.setState({
                markedSectionIndex: this.currentlyMarkedSectionIndex
            });
            this.scrollAnimation.updateData(this.currentlyMarkedSectionIndex);
            counter.data.currentlyMarkedSectionIndex = this.currentlyMarkedSectionIndex;
            counter.action.restart();
        }
    }
    handleScroll = this.handleScroll.bind(this);

    render() {
        const allLocations = counter.data.locationOfAllBars();

        const lyricsSections = allLocations.map((item, index) => {
            const currentBar =
                counter.lyricsData.sections[item[0]].bars[item[1]];

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
                        {counter.lyricsData.title}
                        <a
                            className="lyrics-info-item"
                            href={counter.lyricsData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icon icon-youtube" />
                        </a>
                    </h2>
                    <p className="lyrics-info row">
                        <span className="lyrics-info-item col">
                            Tempo: {counter.lyricsData.tempo}
                        </span>
                        <span className="lyrics-info-item col">
                            Time: {counter.lyricsData.time}
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
