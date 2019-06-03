import React from "react";

function LyricsItem(props) {
  return (
    <li>
      <button>{props.lyricsName}</button>
    </li>
  );
}

export default LyricsItem;
