import { colorScheme, space } from "./";

export const focus = colorSchemeNo => {
    const { secondary1, contrast2 } = colorScheme[colorSchemeNo];
    return `
    &:focus {
        outline: none;
        box-shadow: 
            ${secondary1} 0px 0px 0px 1px, 
            ${contrast2} 0px 0px 0px 3px;
        z-index: 1;
    }
`;
};

const input = (colorSchemeNo, size) => {
    size =
        size === "lg"
            ? (size = 40)
            : size === "md"
            ? (size = 30)
            : size === "sm"
            ? (size = 20)
            : (size = 40);

    const { light1, secondary1, contrast2, light2 } = colorScheme[
        colorSchemeNo
    ];

    return `
        height: ${size}px;
        border-radius: ${size / 2}px;
        font-size: ${size / 2}px;
        padding-left: ${size / 2}px;
        padding-right: ${size / 2}px;
        border: none;
        background-color: ${light1};
        color: ${secondary1};
        cursor: pointer;
        &:hover{
            color: ${contrast2};
            background-color: ${light2};
            &::placeholder {
                color: ${contrast2};
            }
        }
        &::placeholder {
            color: ${secondary1};
        }
        ${focus(colorSchemeNo)}
`;
};

export const barInput = (colorSchemeNo, size) => `
    ${input(colorSchemeNo, size)}
    margin-top: ${space.s3}
`;

export const circleInput = colorSchemeNo => `
    ${input(colorSchemeNo, "lg")}
    width: 40px;
    padding: 0;
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
