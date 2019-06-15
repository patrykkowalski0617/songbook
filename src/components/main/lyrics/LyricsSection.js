import React from "react";

const LyricsSection = function(props) {
   return (
      <div className={"lyrics-section"}>
         <p className="lyrics-text">{props.text}</p>
         <p className="lyrics-chords">{props.chords}</p>
      </div>
   );
};

export default LyricsSection;
