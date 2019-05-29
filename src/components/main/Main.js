import React from "react";
import LyricsList from "./LyricsList";

function Main(props) {
   return (
      <main className="main">
         <div className="container">
            <LyricsList display={props.display} />
         </div>
      </main>
   );
}

export default Main;
