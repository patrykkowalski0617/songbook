import React from "react";
import { connect } from "react-redux";
import { LyricsList } from "./";
import { Lyrics } from "./lyrics";
import { Settings, defaultSettings } from "./settings";
import styled from "styled-components";
import {
    headerH,
    footerH,
    space,
    colorScheme,
    media,
    container
} from "../style";

const MainElement = styled.main`
    height: calc(100vh - ${headerH} - ${footerH});
    background-image: url("/img/${props =>
        colorScheme[props.colorSchemeNo].bgImgName}_640.jpg");
    @media (min-width: ${media.m}) {
        background-image: url("/img/${props =>
            colorScheme[props.colorSchemeNo].bgImgName}_1280.jpg");
    }
    @media (min-width: ${media.l}) {
        background-image: url("/img/${props =>
            colorScheme[props.colorSchemeNo].bgImgName}_1920.jpg");
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${props => colorScheme[props.colorSchemeNo].light1};
    overflow: hidden;
`;

const Container = styled.div`
    height: 100%;
    overflow: hidden auto;
    position: relative;
    background: ${props => colorScheme[props.colorSchemeNo].dark1}d5;
    ${container};
`;

const ContainerElement = styled.div`
    font-size: ${space.s5};
    text-align: center;
    padding-top: ${space.s7};
`;

const Main = ({
    redux: { lyricsData, displayLyricsList, displaySettings, colorSchemeNo }
}) => {
    const keyForSavedSettings = "saved_settings";

    // get value from local storage. If ther is no saved values, eturn default value
    const getInitialValue = (key, defaultValue) => {
        let value = window.localStorage.getItem(keyForSavedSettings);
        value = value !== null ? JSON.parse(value)[key] : defaultValue;
        value = value !== undefined ? value : defaultValue;
        return value;
    };

    const initialValues = {
        metronom_sound: getInitialValue(
            "metronom_sound",
            defaultSettings.metronomSound
        ),
        start_delay: getInitialValue("start_delay", defaultSettings.startDelay)
    };

    return (
        <MainElement colorSchemeNo={colorSchemeNo}>
            <Container colorSchemeNo={colorSchemeNo}>
                <LyricsList />
                {lyricsData && !displayLyricsList && !displaySettings ? (
                    <Lyrics />
                ) : null}
                {!lyricsData && !displayLyricsList ? (
                    <ContainerElement></ContainerElement>
                ) : null}
                <Settings
                    initialValues={initialValues}
                    keyForSavedSettings={keyForSavedSettings}
                />
            </Container>
        </MainElement>
    );
};

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Main);
