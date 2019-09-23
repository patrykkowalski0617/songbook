import { colorScheme } from "./styleVariables";

export const focus = `
    &:focus {
        outline: none;
        box-shadow: ${colorScheme[0].contrast2} 0px 0px 0px 2px;
        z-index: 1;
    }
`;

const input = `
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: ${colorScheme[0].light1};
    color: ${colorScheme[0].secondary1};
    font-size: 20px;
    cursor: pointer;
    &:hover{
        color: ${colorScheme[0].contrast2};
        background-color: ${colorScheme[0].light2};
    }
    ${focus}
`;

export const barInput = `
    ${input}
    padding-left: 20px;
    padding-right: 20px;
`;

export const circleInput = `
    ${input}
    width: 40px;
`;
