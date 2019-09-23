import React from "react";
import styled, { keyframes } from "styled-components";
import { colorScheme } from "../../style";
import { connect } from "react-redux";

const CountdownElement = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${colorScheme[0].dark1};
    color: ${colorScheme[0].light1};
    text-align: center;
    opacity: 0.5;
    z-index: 1;
    font-size: 200px;
`;

const numberZoomAnimation = keyframes`
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0}
    100% {transform: translate(-50%, -50%) scale(1); opacity: 1}
`;

const Coundown = props => {
    const {
        lyricsData,
        counterScrollDelay,
        songTiming,
        counterIsRun,
        counterIterationNumber
    } = props.redux;

    const time = (60 / lyricsData.tempo) * 1000 * 0.25;

    const delay = counterScrollDelay * songTiming;

    const P = styled.p`
        position: absolute;
        top: 50%;
        left: 50%
        transform: translate(-50%, -50%);
        animation: ${numberZoomAnimation} ${props => time}ms linear 1;
    `;

    return counterIsRun && counterIterationNumber + 1 <= delay ? (
        <CountdownElement>
            <P time={time}>{songTiming - counterIterationNumber}</P>
        </CountdownElement>
    ) : null;
};

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Coundown);
