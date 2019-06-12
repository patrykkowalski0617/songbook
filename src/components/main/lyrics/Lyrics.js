import React, { Component } from "react";
import LyricsSection from "./LyricsSection";

import counter from "../../../logic/counter";

class Lyrics extends Component {
   state = {
      bar: 0,
      barSet: 0
   };

   upadteLyricsBody = function() {
      this.setState({
         bar: counter.clock.current.bar,
         barSet: counter.clock.current.barSet
      });
   };
   upadteLyricsBody = this.upadteLyricsBody.bind(this);

   componentDidMount() {
      counter.callback = this.upadteLyricsBody;
   }

   render() {
      const text =
         counter.lyricsData.body[this.state.barSet].text[this.state.bar];
      const chords =
         counter.lyricsData.body[this.state.barSet].chords[this.state.bar];

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
               sectionName={"previous-section"}
               text={text}
               chords={chords}
            />
            <LyricsSection
               sectionName={"current-section"}
               text={text}
               chords={chords}
            />
            <LyricsSection
               sectionName={"next-section"}
               text={text}
               chords={chords}
            />
         </div>
      );
   }
}

export default Lyrics;
