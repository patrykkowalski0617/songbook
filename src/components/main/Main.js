import React from "react";
import LyricsList from "./lyrics-list/LyricsList";
import Lyrics from "./lyrics/Lyrics";
import Metronom from "./metronom/Metronom";

function Main(props) {
    let lyrics, metronom;
    if (props.lyricsData && props.displayLyrics) {
        lyrics = <Lyrics counter={props.counter} />;
        metronom = <Metronom counter={props.counter} />;
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
                {metronom}
            </div>
        </main>
    );
}

export default Main;
