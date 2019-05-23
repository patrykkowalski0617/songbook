import React, { Component } from "react";
import LyricsSearch from "./Lyrics_Search";

class Main extends Component {
   state = {
      display: {
         lyricsSearch: false
      }
   };
   render() {
      let lyricsSearch = null;

      if (this.state.display.lyricsSearch) {
         lyricsSearch = <LyricsSearch />;
      } else {
         lyricsSearch = "";
      }
      return <main>{lyricsSearch}</main>;
   }
}

export default Main;
