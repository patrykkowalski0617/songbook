import React from "react";
import styled from "styled-components";
import { footerH, colorScheme, container } from "../../style";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("settings");

const FooterElement = styled.footer`
    height: ${footerH};
    text-align: center;
    background-color: ${props => colorScheme[props.colorSchemeNo].dark1};
    color: ${props => colorScheme[props.colorSchemeNo].light1};
`;

const Container = styled.div`
    ${container}
`;

const Footer = ({ colorSchemeNo }) => {
    return (
        <FooterElement colorSchemeNo={colorSchemeNo}>
            <Container>&copy; SongBook</Container>
        </FooterElement>
    );
};

const mapStateToProps = state => ({
    redux: state,
    colorSchemeNo: selector(state, "color_scheme_no") || 0
});

export default connect(mapStateToProps)(Footer);
