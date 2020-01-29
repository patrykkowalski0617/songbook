import React from "react";
import styled, { keyframes } from "styled-components";
import { colorScheme } from "../../style";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("settings");

const CountdownElement = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: ${props => colorScheme[props.colorSchemeNo].light1};
    text-align: center;
    opacity: 0.5;
    z-index: 1;
    font-size: 200px;
`;

const PreventScrollCover = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
`;

const numberZoomAnimation = keyframes`
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0}
    100% {transform: translate(-50%, -50%) scale(1); opacity: 1}
`;

const Coundown = ({
    displayCountdown,
    startDelay,
    redux: {
        lyricsData,
        songTiming,
        counterIsRun,
        counterIterationNumber,
        colorSchemeNo
    }
}) => {
    const time = (60 / lyricsData.tempo) * 1000 * 0.25;

    const delay = startDelay * songTiming;

    const P = styled.p`
        position: absolute;
        top: 50%;
        left: 50%
        transform: translate(-50%, -50%);
        animation: ${numberZoomAnimation} ${time}ms ease-out 1;
    `;
    console.log(displayCountdown);
    return displayCountdown ? (
        <CountdownElement colorSchemeNo={colorSchemeNo}>
            <P time={time}>{delay - counterIterationNumber}</P>
        </CountdownElement>
    ) : counterIsRun ? (
        <PreventScrollCover />
    ) : null;
};

const mapStateToProps = state => ({
    redux: state,
    startDelay: selector(state, "start_delay")
});

export default connect(mapStateToProps)(Coundown);
