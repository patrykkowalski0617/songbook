import { keyframes } from "styled-components";

export const pulse = props => keyframes`
    0% {
        box-shadow: 0 0 5px 0px ${props.animationColor}ff;
    }
    100% {
        box-shadow: 0 0 0 45px ${props.animationColor}00;
    }
`;
