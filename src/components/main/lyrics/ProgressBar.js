import React from "react";
import styled from "styled-components";
import styleVariables from "../../style_abstract/styleVariables";

const { color } = styleVariables;

const ProgreesBarContainer = styled.div`
    width: 100%;
    height: 8px;
    background: ${color.mintsemi};
    overflow: hidden;
`;
const ProgreesBarElement = styled.div`
    width: ${props => props.scrollProgress || "0%"};
    height: 8px;
    background: ${color.mintcream};
    margin: 0 -5px;
`;

const ProgreesBar = props => {
    const { scrollProgress } = props;

    return (
        <ProgreesBarContainer>
            <ProgreesBarElement
                scrollProgress={scrollProgress}
            ></ProgreesBarElement>
        </ProgreesBarContainer>
    );
};

export default ProgreesBar;
