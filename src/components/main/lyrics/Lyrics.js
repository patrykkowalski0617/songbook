import React, { Component } from "react";
import LyricsSection from "./LyricsSection";

import counter from "../../../logic/counter";

class Lyrics extends Component {
   state = { currentLocation: 0 };

   upadteLyricsBody = function() {
      this.setState({
         currentLocation: counter.locationOfCurrentBarIndex
      });
   };
   upadteLyricsBody = this.upadteLyricsBody.bind(this);

   componentDidMount() {
      counter.data.callbackOn.barChange = this.upadteLyricsBody;
   }

   render() {
      const timeZones = [-2, -1, 0, 1, 2];
      const allLocations = counter.data.locationOf.allBars();
      const currentBar = timeZone => {
         return allLocations[
            this.state.currentLocation + timeZones[timeZone]
         ] && this.state.currentLocation + timeZones[timeZone] >= 0
            ? counter.lyricsData.sections[
                 allLocations[
                    this.state.currentLocation + timeZones[timeZone]
                 ][0]
              ].bars[
                 allLocations[
                    this.state.currentLocation + timeZones[timeZone]
                 ][1]
              ]
            : { text: "-", chords: "-" };
      };

      const lyricsSections = timeZones.map((item, index) => {
         const currentB = currentBar(index);
         return (
            <LyricsSection
               key={index}
               text={currentB.text}
               chords={currentB.chords}
            />
         );
      });

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
            {lyricsSections}
         </div>
      );
   }
}

export default Lyrics;
