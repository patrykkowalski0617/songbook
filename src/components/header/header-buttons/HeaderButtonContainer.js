import React, { Component } from "react";
import HeaderButton from "./HeaderButton";
import styled from "styled-components";
import v from "../../style_abstract/variables";

export const HeaderButtonContainer = styled.div`
    margin-right: -${v.space.s1};
    margin-left: 0;
`;

class ButtonContainer extends Component {
    state = {
        buttonsOnState: [true, true]
    };

    autoFocus = null;

    buttonsElements = this.props.buttonsData.map((item, index) => {
        let headerButton, icon;

        const _this = this;

        if (index === this.props.headerFocusedButtounIndex) {
            this.autoFocus = "autofocus";
        } else {
            this.autoFocus = "";
        }

        if (_this.state.buttonsOnState[index]) {
            icon = item.onIcon;
        } else {
            icon = item.offIcon;
        }

        if (this.props.displayHeaderButtons[index]) {
            headerButton = (
                <HeaderButton
                    key={index}
                    icon={icon}
                    onClick={() => {
                        item.onClickHandler();
                    }}
                    autoFocus={this.autoFocus}
                />
            );
        }

        return headerButton;
    });

    render() {
        console.log("render");
        return (
            <HeaderButtonContainer className="row">
                {this.buttonsElements}
            </HeaderButtonContainer>
        );
    }
}

export default ButtonContainer;
