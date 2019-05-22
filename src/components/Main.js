import React, { Component } from "react";
import LyricsSearch from "./Lyrics_Search";

class Main extends Component {
   render() {
      return (
         <main>
            <div className="container">
               <LyricsSearch />
            </div>
         </main>
      );
   }
}

export default Main;
