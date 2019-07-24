import React from "react";
import styled from "styled-components";
import v from "../style_abstract/variables";

export const FooterElement = styled.footer`
    height: ${v.footerH};
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
