import React from "react";
import LyricsItem from "./LyricsItem";

const LyricsList = props => {
   const style = {
      display: props.display
   };

   return (
      <ul style={style}>
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
