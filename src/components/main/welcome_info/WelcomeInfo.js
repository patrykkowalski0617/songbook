import React from "react";
import styled from "styled-components";
import v from "../../style_abstract/variables";

export const ContainerElement = styled.div`
    font-size: ${v.space.s5};
    text-align: center;
    padding-top: ${v.space.s7};
`;

const WelcomeInfo = function() {
    return (
        <ContainerElement>
            <p>Wybierz piosenkę z listy</p>
        </ContainerElement>
    );
};

export default WelcomeInfo;
