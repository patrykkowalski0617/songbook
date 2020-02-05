import React from "react";
import { Search, HeaderButtons } from "./";
import styled from "styled-components";
import {
    headerH,
    space,
    colorScheme,
    container,
    focus,
    linkStyle
} from "../../style";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("settings");

const HeaderElement = styled.header`
    height: ${headerH};
    background-color: ${props => colorScheme[props.colorSchemeNo].dark1};
    color: ${props => colorScheme[props.colorSchemeNo].light1};
`;

const Container = styled.div`
    ${container}
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: 20px;
`;

const Logo = styled.h1`
    font-weight: 700;
    font-size: ${space.s4};
    line-height: 20px;
    margin: 0;
    display: ${props => props.displayLogo};
    ${props => {
        const no = props.colorSchemeNo;
        return `
         color: ${colorScheme[no].contrast1};
        `;
    }}
`;

const LogoLink = styled.a`
    display: block;
    width: 49px;
    ${props => {
        const no = props.colorSchemeNo;
        return focus(no);
    }}
    ${linkStyle()}
`;

const Header = ({ colorSchemeNo, redux: { displayLyricsList } }) => {
    return (
        <HeaderElement colorSchemeNo={colorSchemeNo}>
            <Container>
                <Logo
                    displayLogo={displayLyricsList ? "none" : "block"}
                    colorSchemeNo={colorSchemeNo}
                >
                    <LogoLink href="/" colorSchemeNo={colorSchemeNo}>
                        Song Book
                    </LogoLink>
                </Logo>
                <Search />
                <HeaderButtons />
            </Container>
        </HeaderElement>
    );
};

const mapStateToProps = state => ({
    redux: state,
    colorSchemeNo: selector(state, "color_scheme_no") || 0
});

export default connect(mapStateToProps)(Header);
