import { keyframes } from "styled-components";

export const pulse = props => {
    const { animationColor } = props;

    return keyframes`
    0% {
        box-shadow: 0 0 5px 0px ${animationColor}ff;
    }
    100% {
        box-shadow: 0 0 0 45px ${animationColor}00;
    }
`;
};
