import React from "react";
import LyricsList from "./lyrics-list/LyricsList";
import Lyrics from "./lyrics/lyrics";

function Main(props) {
   return (
      <main className="main">
         <div className="container">
            <LyricsList
               display={props.display}
               searchResult={props.searchResult}
            />
            <Lyrics />
         </div>
      </main>
   );
}

export default Main;
