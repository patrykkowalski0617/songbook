import React from "react";
import LyricsList from "./lyrics-list/LyricsList";
import Lyrics from "./lyrics/Lyrics";
import Metronom from "./metronom/Metronom";

function Main(props) {
    let lyrics;
    if (props.lyricsData) {
        lyrics = <Lyrics counter={props.counter} />;
    }
    return (
        <main className="main">
            <div className="container">
                <LyricsList
                    displayLyricsList={props.displayLyricsList}
                    searchResult={props.searchResult}
                    getLyricsName={props.getLyricsName}
                />
                {lyrics}
                {/* <Metronom counter={props.counter} /> */}
            </div>
        </main>
    );
}

export default Main;
