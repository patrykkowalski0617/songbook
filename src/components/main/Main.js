import React from "react";
import LyricsList from "./LyricsList";
import Lyrics from "./lyrics/Lyrics";
import styled from "styled-components";
import {
    headerH,
    footerH,
    space,
    colorScheme,
    media,
    container
} from "../style";
import { connect } from "react-redux";

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
    overflow: auto;
    position: relative;
    background: ${props => colorScheme[props.colorSchemeNo].dark1Fade};
    ${container};
`;

const ContainerElement = styled.div`
    font-size: ${space.s5};
    text-align: center;
    padding-top: ${space.s7};
`;

const Main = props => {
    const { lyricsData, displayLyricsList, colorSchemeNo } = props.redux;

    return (
        <MainElement colorSchemeNo={colorSchemeNo}>
            <Container colorSchemeNo={colorSchemeNo}>
                <LyricsList />
                {lyricsData && !displayLyricsList ? <Lyrics /> : null}
                {!lyricsData && !displayLyricsList ? (
                    <ContainerElement>
                        <p>Wybierz piosenkę z listy</p>
                    </ContainerElement>
                ) : null}
            </Container>
        </MainElement>
    );
};

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Main);
