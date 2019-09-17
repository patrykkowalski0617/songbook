import React from "react";
import Search from "./Search";
import HeaderButtons from "./HeaderButtons";
import styled from "styled-components";
import v from "../style_abstract/variables";
import { connect } from "react-redux";

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
    display: ${props => props.displayLogo};
`;

const LogoLink = styled.a`
    display: block;
    width: 49px;
`;

const Header = function(props) {
    const displayLogo = props.redux.displayLyricsList ? "none" : "block";

    return (
        <HeaderElement className="header">
            <Container className="container">
                <Logo displayLogo={displayLogo}>
                    <LogoLink href="/">Song Book</LogoLink>
                </Logo>
                <Search />
                <HeaderButtons buttonsData={props.buttonsData} />
            </Container>
        </HeaderElement>
    );
};

const mapStateToProps = state => {
    return { redux: state };
};

export default connect(mapStateToProps)(Header);
