import React from "react";
import styled from "styled-components";
import { footerH } from "../style_abstract/variables";

export const FooterElement = styled.footer`
    height: ${footerH};
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterElement className="footer">
            <div className="container">&copy; SongBook</div>
        </FooterElement>
    );
};

export default Footer;
