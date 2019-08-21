import React from "react";
import LyricsList from "./LyricsList";
import Lyrics from "./lyrics/Lyrics";
import WelcomeInfo from "./WelcomeInfo";
import styled from "styled-components";
import v from "../style_abstract/variables";

const MainElement = styled.main`
    height: calc(100vh - ${v.headerH} - ${v.footerH});
    background-color: ${v.color.light};
    color: ${v.color.dark};
    overflow: auto;
`;

function Main(props) {
    let lyrics, welcomeInfo;
    if (props.lyricsData && props.displayLyrics) {
        lyrics = (
            <Lyrics
                counter={props.counter}
                displayCountdown={props.displayCountdown}
            />
        );
    }

    if (props.displayWelcomeInfo && !props.displayLyricsList) {
        welcomeInfo = <WelcomeInfo />;
    }

    return (
        <MainElement>
            <div className="container">
                <LyricsList
                    displayLyricsList={props.displayLyricsList}
                    searchResult={props.searchResult}
                    getLyricsJson={props.getLyricsJson}
                    lyricsListAutoFocus={props.lyricsListAutoFocus}
                />
                {welcomeInfo}
                {lyrics}
            </div>
        </MainElement>
    );
}

export default Main;
