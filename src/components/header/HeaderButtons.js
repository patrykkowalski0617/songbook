import React from "react";
import styled from "styled-components";
import v from "../style_abstract/variables";

const HeaderButtonsElement = styled.div`
    margin-right: -${v.space.s1};
    margin-left: 0;
`;

const ButtonContainer = styled.div`
    padding: 0 0.4rem;
`;

const ButtonElement = styled.button`
    font-size: 20px;
    cursor: pointer;
`;

const HeaderButtons = function(props) {
    const buttonElements = props.buttonsData.map((item, index) => {
        const icon = props.buttonsOnStates[index] ? item.onIcon : item.offIcon;

        const autoFocus =
            index === props.headerFocusedButtounIndex ? "autofocus" : "";

        return props.displayHeaderButtons[index] ? (
            <ButtonContainer className="col" key={index}>
                <ButtonElement
                    className={`icon-${icon} circle-input`}
                    onClick={() => {
                        item.onClickHandler();
                        props.switchButtonIcon(index);
                    }}
                    autoFocus={autoFocus ? autoFocus : ""}
                />
            </ButtonContainer>
        ) : null;
    });

    return (
        <HeaderButtonsElement className="row">
            {buttonElements}
        </HeaderButtonsElement>
    );
};

export default HeaderButtons;
