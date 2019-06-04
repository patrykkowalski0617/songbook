import React from "react";
import LyricsItem from "./LyricsItem";

const LyricsList = props => {
   const lyricsItems = function() {
      if (props.searchResult.length) {
         return props.searchResult.map(lyricsNames => (
            <LyricsItem
               key={lyricsNames.id}
               lyricsName={lyricsNames.lyricsName}
            />
         ));
      }
      return "Jeszcze nie znam takiej pioseki :(";
   };
   return <ul className={`lyrics-list ${props.display}`}>{lyricsItems()}</ul>;
};

export default LyricsList;
