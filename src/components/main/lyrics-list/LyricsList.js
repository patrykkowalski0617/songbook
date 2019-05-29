import React from "react";
import LyricsItem from "./LyricsItem";

function LyricsList(props) {
  const style = {
    display: props.display
  };

  return (
    <ul style={style}>
      <LyricsItem />
      <LyricsItem />
      <LyricsItem />
    </ul>
  );
}

export default LyricsList;
