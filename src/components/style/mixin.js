import { colorScheme } from "./";

export const focus = colorSchemeNo => `
    &:focus {
        outline: none;
        box-shadow: 
            ${colorScheme[colorSchemeNo].secondary1} 0px 0px 0px 1px, 
            ${colorScheme[colorSchemeNo].contrast2} 0px 0px 0px 3px;
        z-index: 1;
    }
`;

const input = colorSchemeNo => `
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: ${colorScheme[colorSchemeNo].light1};
    color: ${colorScheme[colorSchemeNo].secondary1};
    font-size: 20px;
    cursor: pointer;
    &:hover{
        color: ${colorScheme[colorSchemeNo].contrast2};
        background-color: ${colorScheme[colorSchemeNo].light2};
        &::placeholder {
            color: ${colorScheme[colorSchemeNo].contrast2};
        }
    }
    &::placeholder {
        color: ${colorScheme[colorSchemeNo].secondary1};
    }
    ${focus(colorSchemeNo)}
`;

export const barInput = colorSchemeNo => `
    ${input(colorSchemeNo)}
    padding-left: 20px;
    padding-right: 20px;
`;

export const circleInput = colorSchemeNo => `
    ${input(colorSchemeNo)}
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
