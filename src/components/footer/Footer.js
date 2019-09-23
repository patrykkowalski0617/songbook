import React from "react";
import styled from "styled-components";
import { footerH, colorScheme, container } from "../style";
import { connect } from "react-redux";

const FooterElement = styled.footer`
    height: ${footerH};
    text-align: center;
    background-color: ${props => colorScheme[props.colorSchemeNo].dark1};
    color: ${props => colorScheme[props.colorSchemeNo].light1};
`;

const Container = styled.div`
    ${container}
`;

const Footer = props => {
    const { colorSchemeNo } = props.redux;

    return (
        <FooterElement colorSchemeNo={colorSchemeNo}>
            <Container>&copy; SongBook</Container>
        </FooterElement>
    );
};

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Footer);
