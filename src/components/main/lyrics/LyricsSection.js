import React from "react";

const LyricsSection = function(props) {
   return (
      <div className={"lyrics-section"}>
         <div className="section-content">
            <p className="lyrics-text">{props.text}</p>
            <p className="lyrics-chords">{props.chords}</p>
         </div>
      </div>
   );
};

export default LyricsSection;
