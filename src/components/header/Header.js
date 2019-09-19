import React from "react";
import Search from "./Search";
import HeaderButtons from "./HeaderButtons";
import styled from "styled-components";
import styleVariables from "../style_abstract/styleVariables";
import { connect } from "react-redux";

const { headerH, headerPadding, space } = styleVariables;

const HeaderElement = styled.header`
    height: ${headerH};
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: ${headerPadding};
    padding-bottom: ${headerPadding};
`;

const Logo = styled.h1`
    font-weight: 700;
    font-size: ${space.s4};
    line-height: 20px;
    display: ${props => props.displayLogo};
`;

const LogoLink = styled.a`
    display: block;
    width: 49px;
`;

const Header = function(props) {
    const { displayLyricsList } = props.redux;

    return (
        <HeaderElement className="header">
            <Container className="container">
                <Logo displayLogo={displayLyricsList ? "none" : "block"}>
                    <LogoLink href="/">Song Book</LogoLink>
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
