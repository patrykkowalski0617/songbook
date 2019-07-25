import React from "react";
import LyricsList from "./lyrics-list/LyricsList";
import Lyrics from "./lyrics/Lyrics";
import Metronom from "./metronom/Metronom";
import WelcomeInfo from "./welcome_info/WelcomeInfo";
import styled from "styled-components";
import v from "../style_abstract/variables";

export const MainElement = styled.main`
    height: calc(100vh - ${v.headerH} - ${v.footerH});
    background-color: ${v.color.light};
    color: ${v.color.dark};
    overflow: auto;
`;

function Main(props) {
    let lyrics, metronom, welcomeInfo;
    if (props.lyricsData && props.displayLyrics) {
        lyrics = <Lyrics counter={props.counter} />;
        metronom = <Metronom counter={props.counter} />;
    }

    if (props.displayWelcomeInfo) {
        welcomeInfo = <WelcomeInfo />;
    }

    return (
        <MainElement>
            <div className="container">
                <LyricsList
                    displayLyricsList={props.displayLyricsList}
                    searchResult={props.searchResult}
                    getLyricsJson={props.getLyricsJson}
                />
                {welcomeInfo}
                {lyrics}
                {metronom}
            </div>
        </MainElement>
    );
}

export default Main;
