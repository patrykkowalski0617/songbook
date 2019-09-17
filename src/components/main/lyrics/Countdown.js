import React from "react";
import styled, { keyframes } from "styled-components";
import v from "../../style_abstract/variables";
import { connect } from "react-redux";

const CountdownElement = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${v.color.dark};
    color: ${v.color.light};
    text-align: center;
    opacity: 0.5;
    z-index: 1;
    font-size: 200px;
`;

const numberZoomAnimation = keyframes`
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0}
    100% {transform: translate(-50%, -50%) scale(1); opacity: 1}
`;

const Coundown = function(props) {
    const time = (60 / props.redux.lyricsData.tempo) * 1000 * 0.25;
    const delay = props.redux.counterScrollDelay * props.redux.songTiming;
    const P = styled.p`
        position: absolute;
        top: 50%;
        left: 50%
        transform: translate(-50%, -50%);
        animation: ${numberZoomAnimation} ${props => props.time}ms linear 1;
    `;

    return props.redux.counterIsRun &&
        props.redux.counterIterationNumber + 1 <= delay ? (
        <CountdownElement>
            <P time={time}>
                {props.redux.songTiming - props.redux.counterIterationNumber}
            </P>
        </CountdownElement>
    ) : (
        ""
    );
};

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Coundown);
