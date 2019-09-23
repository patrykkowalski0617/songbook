import React from "react";
import LyricsList from "./LyricsList";
import Lyrics from "./lyrics/Lyrics";
import styled from "styled-components";
import { headerH, footerH, space, colorScheme, media, grid } from "../style";
import { connect } from "react-redux";

const colorSchemeNo = 0;

const MainElement = styled.main`
    height: calc(100vh - ${headerH} - ${footerH});
    background-image: url("/img/${colorScheme[colorSchemeNo].bgImgName}_640.jpg");
    @media (min-width: ${media.m}) {
        background-image: url("/img/${colorScheme[colorSchemeNo].bgImgName}_1280.jpg");
    }
    @media (min-width: ${media.l}) {
        background-image: url("/img/${colorScheme[colorSchemeNo].bgImgName}_1920.jpg");
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${colorScheme[colorSchemeNo].light1};
    overflow: hidden;
`;

const Container = styled.div`
    height: 100%;
    overflow: auto;
    position: relative;
    background: ${colorScheme[colorSchemeNo].dark1Fade};
    ${grid.container};
`;

const ContainerElement = styled.div`
    font-size: ${space.s5};
    text-align: center;
    padding-top: ${space.s7};
`;

const Main = props => {
    const { lyricsData, displayLyricsList } = props.redux;

    return (
        <MainElement>
            <Container>
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
