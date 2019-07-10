import React from "react";
import LyricsList from "./lyrics-list/LyricsList";
import Lyrics from "./lyrics/Lyrics";
import Metronom from "./metronom/Metronom";

function Main(props) {
    return (
        <main className="main">
            <div className="container">
                <LyricsList
                    display={props.display}
                    searchResult={props.searchResult}
                />
                <Lyrics />
                <Metronom />
            </div>
        </main>
    );
}

export default Main;
