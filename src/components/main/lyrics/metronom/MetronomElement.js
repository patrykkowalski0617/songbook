import React from "react";
import styled from "styled-components";
import v from "../../../style_abstract/variables";

const MetronomEl = styled.div`
    height: 20px;
    border: 0px solid ${v.color.mintdark};
    border-right-width: 1px;
    &:first-child {
        border-left-width: 1px;
    }
    &.active {
        background-color: ${v.color.mintsemi};
    }
`;

function MetronomElement(props) {
    return <MetronomEl className={`col-${props.colSize} ${props.marker}`} />;
}

export default MetronomElement;
