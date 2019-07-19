import React from "react";
import styled from "styled-components";

export const HeaderButton = styled.div`
    padding: 0 0.4rem;
`;

export const Icon = styled.button`
    font-size: 20px;
    cursor: pointer;
`;

const Button = props => {
    return (
        <HeaderButton className="col">
            {props.test}
            <Icon
                className={`icon-${props.icon} circle-input`}
                onClick={props.onClick}
            />
        </HeaderButton>
    );
};

export default Button;
