import React, { Component } from "react";
import HeaderButton from "./HeaderButton";
import styled from "styled-components";
import v from "../../style_abstract/variables";

export const HeaderButtonContainer = styled.div`
    margin-right: -${v.space.s1};
    margin-left: 0;
`;

class ButtonContainer extends Component {
    render() {
        const icons = this.props.icons;
        let autoFocus;
        const autoFocusIndex = this.props.headerFocusedButtounIndex;
        const buttons = icons.map((item, index) => {
            if (index === autoFocusIndex) {
                autoFocus = "autofocus";
            } else {
                autoFocus = "";
            }
            if (item) {
                return (
                    <HeaderButton
                        key={index}
                        icon={icons[index]}
                        onClick={() => this.props.handleClick(index)}
                        autoFocus={autoFocus}
                    />
                );
            }
        });

        return (
            <HeaderButtonContainer className="row">
                {buttons}
            </HeaderButtonContainer>
        );
    }
}

export default ButtonContainer;
