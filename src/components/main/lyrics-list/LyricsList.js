import React from "react";
import LyricsItem from "./LyricsItem";

function LyricsList(props) {
  const style = {
    display: props.display
  };

  console.log(props.searchResult);

  return (
    <ul style={style}>
      <LyricsItem />
      <LyricsItem />
      <LyricsItem />
    </ul>
  );
}

export default LyricsList;
