import React, { Component } from "react";
import Logo from "./Logo";
import Search from "./Search";
import HeaderButtonContainer from "./header-buttons/HeaderButtonContainer";
import styled from "styled-components";
import { headerH, headerPadding } from "../style_abstract/variables";

export const HeaderElement = styled.header`
    height: ${headerH};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: ${headerPadding};
    padding-bottom: ${headerPadding};
`;

class Header extends Component {
    handleClick(buttonIndex) {
        this.props.switchIcon(buttonIndex);
        this.props.buttonData.methods[buttonIndex]();
    }
    handleClick = this.handleClick.bind(this);

    render() {
        const tt = this;
        const indexes = this.props.headerButtonsIconIndex.slice();
        const icons = this.props.buttonData.icons.slice();
        const getIcons = function() {
            return icons.map(function(item, index) {
                if (tt.props.displayHeaderButtons[index]) {
                    return item[indexes[index]];
                }
            });
        };

        return (
            <HeaderElement className="header">
                <Container className="container">
                    <Logo display={this.props.displayLyricsList} />
                    <Search
                        display={this.props.displayLyricsList}
                        searchClick={this.props.searchClick}
                    />
                    <HeaderButtonContainer
                        icons={getIcons()}
                        handleClick={this.handleClick}
                    />
                </Container>
            </HeaderElement>
        );
    }
}

export default Header;
