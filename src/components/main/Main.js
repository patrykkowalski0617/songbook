import React from "react";
import LyricsList from "./LyricsList";
import Lyrics from "./lyrics/Lyrics";
import WelcomeInfo from "./WelcomeInfo";
import styled from "styled-components";
import v from "../style_abstract/variables";
import { connect } from "react-redux";

const MainElement = styled.main`
    height: calc(100vh - ${v.headerH} - ${v.footerH});
    background-color: ${v.color.light};
    color: ${v.color.dark};
    overflow: auto;
`;

function Main(props) {
    let lyrics, welcomeInfo;
    if (props.redux.lyricsData && !props.redux.displayLyricsList) {
        lyrics = <Lyrics displayCountdown={props.displayCountdown} />;
    }

    if (!props.redux.lyricsData && !props.redux.displayLyricsList) {
        welcomeInfo = <WelcomeInfo />;
    }

    return (
        <MainElement>
            <div className="container">
                <LyricsList />
                {welcomeInfo}
                {lyrics}
            </div>
        </MainElement>
    );
}

const mapStateToProps = state => {
    return { redux: state };
};

export default connect(mapStateToProps)(Main);
