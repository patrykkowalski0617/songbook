import React from "react";
import styled from "styled-components";
import styleVariables from "../style_abstract/styleVariables";

const { footerH } = styleVariables;

const FooterElement = styled.footer`
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
