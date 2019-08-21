import React from "react";
import Search from "./Search";
import HeaderButtonContainer from "./header-buttons/HeaderButtonContainer";
import styled from "styled-components";
import v from "../style_abstract/variables";

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

const H1 = styled.h1`
    font-weight: 700;
    font-size: ${v.space.s4};
    line-height: 20px;
`;

const Link = styled.a`
    display: block;
    width: 49px;
`;

const Header = function(props) {
    const Logo = props => {
        return !props.display ? (
            <H1 className={`logo`}>
                <Link href="/">Song Book</Link>
            </H1>
        ) : (
            ""
        );
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
