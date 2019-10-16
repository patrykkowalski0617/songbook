import React from "react";
import Search from "./Search";
import HeaderButtons from "./HeaderButtons";
import styled from "styled-components";
import {
    headerH,
    space,
    colorScheme,
    container,
    focus,
    linkStyle
} from "../style";
import { connect } from "react-redux";

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

const Header = props => {
    const { displayLyricsList, colorSchemeNo } = props.redux;

    return (
        <HeaderElement colorSchemeNo={colorSchemeNo}>
            <Container>
                <Logo displayLogo={displayLyricsList ? "none" : "block"}>
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

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Header);
