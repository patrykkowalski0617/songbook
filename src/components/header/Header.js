import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import HeaderButtonContainer from "./header-buttons/HeaderButtonContainer";
import styled from "styled-components";
import v from "../style_abstract/variables";

export const HeaderElement = styled.header`
    height: ${v.headerH};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: ${v.headerPadding};
    padding-bottom: ${v.headerPadding};
`;

const Header = function(props) {
    const handleClick = function(buttonIndex) {
        props.switchIcon(buttonIndex);
        props.buttonData.methods[buttonIndex]();
    };

    const indexes = props.headerButtonsIconIndex.slice();
    const icons = props.buttonData.icons.slice();
    const getIcons = function() {
        return icons.map(function(item, index) {
            let selectedItem;
            if (props.displayHeaderButtons[index]) {
                selectedItem = item[indexes[index]];
            }
            return selectedItem;
        });
    };

    return (
        <HeaderElement className="header">
            <Container className="container">
                <Logo display={props.displayLyricsList} />
                <Search
                    display={props.displayLyricsList}
                    searchClick={props.searchClick}
                />
                <HeaderButtonContainer
                    icons={getIcons()}
                    handleClick={handleClick}
                    headerFocusedButtounIndex={props.headerFocusedButtounIndex}
                />
            </Container>
        </HeaderElement>
    );
};

export default Header;
