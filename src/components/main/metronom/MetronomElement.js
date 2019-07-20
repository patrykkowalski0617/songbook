import React from "react";
import styled from "styled-components";
import { color } from "../../style_abstract/variables";

export const MetronomEl = styled.div`
    height: 20px;
    border: 0px solid ${color.dark};
    border-right-width: 1px;
    &:first-child {
        border-left-width: 1px;
    }
    &.active {
        background-color: ${color.dark};
    }
`;

function MetronomElement(props) {
    return <MetronomEl className={`col-${props.colSize} ${props.marker}`} />;
}

export default MetronomElement;
