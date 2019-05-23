import React, { Component } from "react";
import ReactDOM from "react-dom";
import LyricsList from "./Lyrics_List";
import lyrics_list from "../data/lyrics_list";

// function allLyricsItems rebuild lyrics_list. Main chcange is
// from:
// artist: {song1, song2, song3}
// to:
// artist: song1, artist: song2

const allLyricsItems = function() {
   const pairedNames = lyrics_list.map(item => {
      return item.songs.map(function(song) {
         return {
            lyricsName: item.artist + " - " + song.name,
            fileVersion: song.fileVersion
         };
      });
   });
   const reducedPairedNames = pairedNames.reduce(function(total, item, index) {
      const arr = total.concat(item),
         addId = a => {
            for (let i = 0; i < a.length; i++) {
               a[i].id = i;
            }
            return a;
         };
      return addId(arr);
   });

   reducedPairedNames.sort((a, b) => {
      return a.lyricsName < b.lyricsName ? -1 : 1;
   });

   return reducedPairedNames;
};

const lyricsList = allLyricsItems();

class LyricsSearch extends Component {
   constructor() {
      super();

      this.state = {
         display: "hidden",
         filteredItems: lyricsList
      };
   }

   filterItems(e) {
      const text = e.currentTarget.value;
      const getFilteredItemsForText = text => {
         return lyricsList.filter(item =>
            item.lyricsName.toLowerCase().includes(text.toLowerCase())
         );
      };
      const filteredItems = getFilteredItemsForText(text);
      this.setState({
         filteredItems
      });
   }

   render() {
      return (
         <div className="container">
            <input type="search" onInput={this.filterItems.bind(this)} />
            <LyricsList items={this.state.filteredItems} />
         </div>
      );
   }
}

window.updateMainComponent = someValue => {
   const mainComponent = document.querySelector("main");
   const update = ReactDOM.render(<LyricsSearch />, mainComponent);

   update.setState(someValue);
};

export default LyricsSearch;
