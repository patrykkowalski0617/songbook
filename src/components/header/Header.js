import React from "react";
import Search from "./Search";
import HeaderButtons from "./HeaderButtons";
import styled from "styled-components";
import v from "../style_abstract/variables";

const Header = function(props) {
    const HeaderElement = styled.header`
        height: ${v.headerH};
    `;

    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-top: ${v.headerPadding};
        padding-bottom: ${v.headerPadding};
    `;

    const Logo = styled.h1`
        font-weight: 700;
        font-size: ${v.space.s4};
        line-height: 20px;
        display: ${props.displayLyricsList ? "none" : "block"};
    `;

    const LogoLink = styled.a`
        display: block;
        width: 49px;
    `;

    return (
        <HeaderElement className="header">
            <Container className="container">
                <Logo>
                    <LogoLink href="/">Song Book</LogoLink>
                </Logo>
                <Search
                    display={props.displayLyricsList}
                    searchClick={props.searchClick}
                    inputAutoFocus={props.inputAutoFocus}
                />
                <HeaderButtons
                    displayHeaderButtons={props.displayHeaderButtons}
                    buttonsData={props.buttonsData}
                    buttonsOnStates={props.buttonsOnStates}
                    switchButtonIcon={props.switchButtonIcon}
                    headerFocusedButtounIndex={props.headerFocusedButtounIndex}
                />
            </Container>
        </HeaderElement>
    );
};

export default Header;
