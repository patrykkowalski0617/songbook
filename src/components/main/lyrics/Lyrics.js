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
      this.scrollAnimation = new ScrollAnimation(
         this.lyricsBody.current,
         this.lyricsSections,
         this.state.markedSectionIndex
      );

      counter.data.callbackOn.barChange = function() {
         console.log("scroll to next section");
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
      }
   }
   handleScroll = this.handleScroll.bind(this);

   test = function() {
      this.scrollAnimation.anim();
   };
   test = this.test.bind(this);

   render() {
      const allLocations = counter.data.locationOfAllBars();

      const lyricsSections = allLocations.map((item, index) => {
         const currentBar = counter.lyricsData.sections[item[0]].bars[item[1]];

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
         <div onClick={this.test}>
            <div className="lyrics-header">
               <h2>{counter.lyricsData.title}</h2>
               <p className="lyrics-info row">
                  <span className="lyrics-info-item col">
                     Tempo: {counter.lyricsData.tempo}
                  </span>
                  <span className="lyrics-info-item col">
                     Time: {counter.lyricsData.time}
                  </span>
                  <a
                     className="lyrics-info-item col"
                     href={counter.lyricsData.link}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i>YT</i>
                  </a>
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
