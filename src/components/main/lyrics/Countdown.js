import React from "react";
import styled, { keyframes } from "styled-components";
import v from "../../style_abstract/variables";

export const CountdownElement = styled.div`
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

const myanimation = keyframes`  
    0% { transform: translate(-50%, -50%) scale(0)}
    100% {transform: translate(-50%, -50%) scale(1)}
`;

export const P = styled.p`
    position: absolute;
    top: 50%;
    left: 50%
    transform: translate(-50%, -50%);
    animation: ${myanimation} 2s linear;
`;

const Coundown = function() {
    return (
        <CountdownElement>
            <P>1</P>
        </CountdownElement>
    );
};

export default Coundown;
