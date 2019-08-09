import React, { Component } from "react";
import HeaderButton from "./HeaderButton";
import styled from "styled-components";
import v from "../../style_abstract/variables";

export const HeaderButtonContainer = styled.div`
    margin-right: -${v.space.s1};
    margin-left: 0;
`;

class ButtonContainer extends Component {
    // state = {
    //     buttonsOnState: [true, true]
    // };

    autoFocus = null;

    // switchIcon(index, buttonsCurrentState) {
    //     const buttonState = buttonsCurrentState.slice();

    //     buttonState[index] = !buttonState[index];

    //     return { buttonsOnState: buttonState };
    // }

    render() {
        const buttonsElements = this.props.buttonsData.map((item, index) => {
            const icon = this.props.buttonsOnStates[index]
                ? item.onIcon
                : item.offIcon;

            this.autoFocus =
                index === this.props.headerFocusedButtounIndex
                    ? "autofocus"
                    : "";

            return this.props.displayHeaderButtons[index] ? (
                <HeaderButton
                    key={index}
                    icon={icon}
                    onClick={() => {
                        // const buttonsCurrentState = this.state.buttonsOnState;
                        // const newState = this.switchIcon(
                        //     index,
                        //     buttonsCurrentState
                        // );

                        item.onClickHandler();
                        this.props.switchButtonIcon(index);
                        // this.setState(newState);
                    }}
                    autoFocus={this.autoFocus}
                />
            ) : null;
        });

        return (
            <HeaderButtonContainer className="row">
                {buttonsElements}
            </HeaderButtonContainer>
        );
    }
}

export default ButtonContainer;
