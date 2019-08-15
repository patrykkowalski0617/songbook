import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
    padding: 0 0.4rem;
`;

const ButtonElement = styled.button`
    font-size: 20px;
    cursor: pointer;
`;

const Button = props => {
    return (
        <ButtonContainer className="col">
            {props.test}
            <ButtonElement
                className={`icon-${props.icon} circle-input`}
                onClick={props.onClick}
                autoFocus={props.autoFocus ? props.autoFocus : ""}
            />
        </ButtonContainer>
    );
};

export default Button;
