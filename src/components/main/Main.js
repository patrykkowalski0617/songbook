import React from "react";
import { connect } from "react-redux";
import { LyricsList } from "./";
import { Lyrics } from "./lyrics";
import { Settings } from "./settings";
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

const Main = props => {
    const {
        redux: { lyricsData, displayLyricsList, displaySettings, colorSchemeNo }
    } = props;

    let storedValue = window.localStorage.getItem("metronom_sound");
    storedValue =
        storedValue === "false"
            ? false
            : storedValue === "true" || storedValue === null
            ? true
            : null;

    const initialValues = {
        metronom_sound: storedValue,
        start_delay: 2
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
                <Settings initialValues={initialValues} />
            </Container>
        </MainElement>
    );
};

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Main);
