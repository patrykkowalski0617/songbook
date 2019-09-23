import React from "react";
import styled from "styled-components";
import { footerH, colorScheme, container } from "../style";

const FooterElement = styled.footer`
    height: ${footerH};
    text-align: center;
    background-color: ${colorScheme[0].dark1};
    color: ${colorScheme[0].light1};
`;

const Container = styled.div`
    ${container}
`;

const Footer = () => {
    return (
        <FooterElement>
            <Container>&copy; SongBook</Container>
        </FooterElement>
    );
};

export default Footer;
