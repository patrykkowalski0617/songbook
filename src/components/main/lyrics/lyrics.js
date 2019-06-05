import React, { Component } from "react";
import kings_of_leon_sex_on_fire from "../../../data/lyrics/kings_of_leon_-_sex_on_fire";

class Lyrics extends Component {
   render() {
      const lyrics = kings_of_leon_sex_on_fire;
      return (
         <div>
            <div className="lyrics-header">
               <h2>{lyrics.title}</h2>
               <p className="lyrics-info row">
                  <span className="lyrics-info-item col">
                     Tempo: {lyrics.tempo}
                  </span>
                  <span className="lyrics-info-item col">
                     Time: {lyrics.time}
                  </span>
                  <a
                     className="lyrics-info-item col"
                     href={lyrics.link}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i>YT</i>
                  </a>
               </p>
            </div>
            <div className="lyrics-body">
               <p className="lyrics-text">{lyrics.body[1].text[0]}</p>
               <p className="lyrics-chords">{lyrics.body[1].chords[0]}</p>
            </div>
         </div>
      );
   }
}

export default Lyrics;
