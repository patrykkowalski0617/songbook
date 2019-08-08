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
    return (
        <HeaderElement className="header">
            <Container className="container">
                <Logo display={props.displayLyricsList} />
                <Search
                    display={props.displayLyricsList}
                    searchClick={props.searchClick}
                />
                <HeaderButtonContainer
                    displayHeaderButtons={props.displayHeaderButtons}
                    buttonsData={props.buttonsData}
                    headerFocusedButtounIndex={props.headerFocusedButtounIndex}
                />
            </Container>
        </HeaderElement>
    );
};

export default Header;
