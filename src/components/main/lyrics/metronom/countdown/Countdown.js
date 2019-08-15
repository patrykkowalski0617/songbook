import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import v from "../../../../style_abstract/variables";

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

export class Coundown extends Component {
    state = { number: null };

    componentDidMount() {
        const _this = this;
        this.time =
            ((this.props.counter.data.songTiming() * 1000) /
                this.props.counter.data.songTiming()) *
            0.35;
        this.props.counter.data.callbackOn.countdown = function(number) {
            _this.setState({ number: number });
        };
    }

    render() {
        const P = styled.p`
            position: absolute;
            top: 50%;
            left: 50%
            transform: translate(-50%, -50%);
            animation: ${numberZoomAnimation} ${this.time}ms linear 1;
        `;

        return this.state.number ? (
            <CountdownElement>
                <P>{this.state.number}</P>
            </CountdownElement>
        ) : (
            ""
        );
    }
}

export default Coundown;
