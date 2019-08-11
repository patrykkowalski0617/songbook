import React from "react";
import HeaderButton from "./HeaderButton";
import styled from "styled-components";
import v from "../../style_abstract/variables";

export const HeaderButtonContainer = styled.div`
    margin-right: -${v.space.s1};
    margin-left: 0;
`;

const ButtonContainer = function(props) {
    let autoFocus = null;

    const buttonsElements = props.buttonsData.map((item, index) => {
        const icon = props.buttonsOnStates[index] ? item.onIcon : item.offIcon;

        autoFocus =
            index === props.headerFocusedButtounIndex ? "autofocus" : "";

        return props.displayHeaderButtons[index] ? (
            <HeaderButton
                key={index}
                icon={icon}
                onClick={() => {
                    item.onClickHandler();
                    props.switchButtonIcon(index);
                }}
                autoFocus={autoFocus}
            />
        ) : null;
    });

    return (
        <HeaderButtonContainer className="row">
            {buttonsElements}
        </HeaderButtonContainer>
    );
};

export default ButtonContainer;
