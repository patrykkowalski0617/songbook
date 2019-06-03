import React from "react";
import LyricsList from "./lyrics-list/LyricsList";

function Main(props) {
   return (
      <main className="main">
         <div className="container">
            <LyricsList
               display={props.display}
               searchResult={props.searchResult}
            />
         </div>
      </main>
   );
}

export default Main;
