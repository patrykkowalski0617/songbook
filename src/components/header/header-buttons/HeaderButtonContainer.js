import React from "react";
import HeaderButton from "./HeaderButton";
import styled from "styled-components";
import v from "../../style_abstract/variables";

export const HeaderButtonContainer = styled.div`
    margin-right: -${v.space.s1};
    margin-left: 0;
`;

const ButtonContainer = function(props) {
    const icons = props.icons;
    let autoFocus;
    const autoFocusIndex = props.headerFocusedButtounIndex;

    const buttons = icons.map((item, index) => {
        let headerButton;
        if (index === autoFocusIndex) {
            autoFocus = "autofocus";
        } else {
            autoFocus = "";
        }
        if (item) {
            headerButton = (
                <HeaderButton
                    key={index}
                    icon={icons[index]}
                    onClick={() => props.handleClick(index)}
                    autoFocus={autoFocus}
                />
            );
        }
        return headerButton;
    });

    return (
        <HeaderButtonContainer className="row">{buttons}</HeaderButtonContainer>
    );
};

export default ButtonContainer;
