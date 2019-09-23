import { colorScheme } from "./";

export const focus = `
    &:focus {
        outline: none;
        box-shadow: 
            ${colorScheme[0].secondary1} 0px 0px 0px 1px, 
            ${colorScheme[0].contrast2} 0px 0px 0px 3px;
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
        &::placeholder {
            color: ${colorScheme[0].contrast2};
        }
    }
    &::placeholder {
        color: ${colorScheme[0].secondary1};
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

export const linkStyle = (color = "inherit", bg = "inherit") => `
        &:link,
        &:visited,
        &:active,
        &:focus,
        &:hover {
            color: ${color};
            background: ${bg};
        }
        text-decoration: none;
`;
