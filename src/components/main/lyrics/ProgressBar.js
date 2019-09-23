import React from "react";
import styled from "styled-components";
import { colorScheme } from "../../style";

const ProgreesBarContainer = styled.div`
    width: 100%;
    height: 5px;
    background: ${colorScheme[0].muted};
    overflow: hidden;
`;
const ProgreesBarElement = styled.div`
    width: ${props => props.scrollProgress || "0%"};
    height: 5px;
    background: ${colorScheme[0].contrast1};
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
