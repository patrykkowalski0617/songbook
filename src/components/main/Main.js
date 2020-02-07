import React from "react";
import { connect } from "react-redux";
import { LyricsList } from "./";
import { Lyrics } from "./lyrics";
import { Settings, defaultSettings, getInitialValue } from "./settings";
import styled from "styled-components";
import { headerH, footerH, colorScheme, media, container } from "../../style";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("settings");

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

const Main = ({
    redux: { lyricsData, displayLyricsList, displaySettings },
    colorSchemeNo
}) => {
    const { metronomSound, startDelay, colorSchemeNO } = defaultSettings;
    const initialValues = {
        metronom_sound: getInitialValue("metronom_sound", metronomSound),
        start_delay: getInitialValue("start_delay", startDelay),
        color_scheme_no: getInitialValue("color_scheme_no", colorSchemeNO)
    };

    return (
        <MainElement colorSchemeNo={colorSchemeNo}>
            <Container colorSchemeNo={colorSchemeNo}>
                <LyricsList />
                {lyricsData && !displayLyricsList && !displaySettings ? (
                    <Lyrics />
                ) : null}
                <Settings initialValues={initialValues} />
            </Container>
        </MainElement>
    );
};

const mapStateToProps = state => ({
    redux: state,
    colorSchemeNo: selector(state, "color_scheme_no") || 0
});

export default connect(mapStateToProps)(Main);
