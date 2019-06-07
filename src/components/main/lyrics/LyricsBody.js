import React from "react";

const LyricsBody = function(props) {
  return (
    <div className="lyrics-body">
      <p className="lyrics-text">{props.text}</p>
      <p className="lyrics-chords">{props.chords}</p>
    </div>
  );
};

export default LyricsBody;
