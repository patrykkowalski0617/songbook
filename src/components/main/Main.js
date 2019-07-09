import React from "react";
import LyricsList from "./lyrics-list/LyricsList";
import Lyrics from "./lyrics/Lyrics";
import Metronom from "./metronom/Metronom";

function Main(props) {
    return (
        <main className="main">
            <Metronom />
            <div className="container">
                <LyricsList
                    display={props.display}
                    searchResult={props.searchResult}
                />
                <Lyrics
                    lyrics={props.lyrics}
                    bar={props.bar}
                    barSet={props.barSet}
                />
            </div>
        </main>
    );
}

export default Main;
