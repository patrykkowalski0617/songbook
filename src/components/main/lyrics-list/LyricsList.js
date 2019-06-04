import React from "react";
import LyricsItem from "./LyricsItem";

const LyricsList = props => {
   return (
      <ul className={`lyrics-list ${props.display}`}>
         {props.searchResult.map(lyricsNames => (
            <LyricsItem
               key={lyricsNames.id}
               lyricsName={lyricsNames.lyricsName}
            />
         ))}
      </ul>
   );
};

export default LyricsList;
