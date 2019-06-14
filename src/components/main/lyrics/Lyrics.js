import React, { Component } from "react";
import LyricsSection from "./LyricsSection";

import counter from "../../../logic/counter";

class Lyrics extends Component {
   state = { sectionIndex: 0, barIndex: 0 };

   upadteLyricsBody = function() {
      this.setState({
         sectionIndex: counter.data.locationOf.currentBar[0],
         barIndex: counter.data.locationOf.currentBar[1]
      });
   };
   upadteLyricsBody = this.upadteLyricsBody.bind(this);

   componentDidMount() {
      counter.data.callbackOn.barChange = this.upadteLyricsBody;
   }

   render() {
      return (
         <div>
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
            <LyricsSection
               sectionName={"current-section"}
               text={
                  counter.lyricsData.sections[this.state.sectionIndex].bars[
                     this.state.barIndex
                  ].text
               }
               chords={
                  counter.lyricsData.sections[this.state.sectionIndex].bars[
                     this.state.barIndex
                  ].chords
               }
            />
         </div>
      );
   }
}

export default Lyrics;
