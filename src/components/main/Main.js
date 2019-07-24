import React from "react";
import LyricsList from "./lyrics-list/LyricsList";
import Lyrics from "./lyrics/Lyrics";
import Metronom from "./metronom/Metronom";
import styled from "styled-components";
import { headerH, footerH, color } from "../style_abstract/variables";

export const MainElement = styled.main`
    height: calc(100vh - ${headerH} - ${footerH});
    background-color: ${color.light};
    color: ${color.dark};
    overflow: auto;
`;

function Main(props) {
    let lyrics, metronom;
    if (props.lyricsData && props.displayLyrics) {
        lyrics = <Lyrics counter={props.counter} />;
        metronom = <Metronom counter={props.counter} />;
    }

    return (
        <MainElement>
            <div className="container">
                <LyricsList
                    displayLyricsList={props.displayLyricsList}
                    searchResult={props.searchResult}
                    getLyricsJson={props.getLyricsJson}
                />
                {lyrics}
                {metronom}
            </div>
        </MainElement>
    );
}

export default Main;
