import React from "react";
import styled from "styled-components";
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

const animation = keyframes`{
    from: {opacity: 0},
    to: {opacity: 1}
  }`;

export const P = styled.p`
    position: absolute;
    top: 50%;
    left: 50%
    transform: translate(-50%, -50%);
    animation: ${animation}
`;

const Coundown = function() {
    return (
        <CountdownElement>
            <P>1</P>
        </CountdownElement>
    );
};

export default Coundown;
