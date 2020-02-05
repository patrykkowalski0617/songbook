export const space = {
    s1: `0.4rem`,
    s2: `0.7rem`,
    s3: `1rem`,
    s4: `1.3rem`,
    s5: `1.6rem`,
    s6: `1.9rem`,
    s7: `2.2rem`
};

export const media = {
    s: "450px",
    m: "768px",
    l: "1024px"
};

const colGeneral = `display: block; padding: 0 ${space.s2};`;

export const containerFluid = `
    margin: 0 auto;
    padding: ${space.s2};
`;

export const container = `
    max-width: 700px;
    margin: 0 auto;
    padding: ${space.s2};
`;

export const verticalPadding = `
    padding-top: ${space.s2};
    padding-bottom: ${space.s2};
`;

export const section = `
    padding: ${space.s3} 0 ${space.s6} 0;
`;

export const row = ` 
    margin-left: -${space.s2};
    margin-right: -${space.s2};
    display: flex;
    flex-flow: row wrap;
`;

export const col = [
    /* auto size */ `
        ${colGeneral}
    `,
    `
        ${colGeneral}
        max-width: 8.33%;
        flex: 0 0 8.33%;
    `,
    `
        ${colGeneral}
        max-width: 16.66%;
        flex: 0 0 16.66%;
    `,
    `
        ${colGeneral}
        max-width: 25%;
        flex: 0 0 25%;
    `,
    `
        ${colGeneral}
        max-width: 33.33%;
        flex: 0 0 33.33%;
    `,
    `
        ${colGeneral}
        max-width: 41.66%;
        flex: 0 0 41.66%;
    `,
    `
        ${colGeneral}
        max-width: 50%;
        flex: 0 0 50%;
    `,
    `
        ${colGeneral}
        max-width: 58.33%;
        flex: 0 0 58.33%;
    `,
    `
        ${colGeneral}
        max-width: 66.66%;
        flex: 0 0 66.66%;
    `,
    `
        ${colGeneral}
        max-width: 75%;
        flex: 0 0 75%;
    `,
    `
        ${colGeneral}
        max-width: 83.33%;
        flex: 0 0 83.33%;
    `,
    `
        ${colGeneral}
        max-width: 91.66%;
        flex: 0 0 91.66%;
    `,
    `
        ${colGeneral}
        max-width: 100%;
        flex: 0 0 100%;
    `
];
export const off = [
    `margin-left: 0;`,
    `margin-left: 8.33%;`,
    `margin-left: 16.66%;`,
    `margin-left: 25%;`,
    `margin-left: 33.33%;`,
    `margin-left: 41.66%;`,
    `margin-left: 50%;`,
    `margin-left: 58.33%;`,
    `margin-left: 66.66%;`,
    `margin-left: 75%;`,
    `margin-left: 83.33%;`,
    `margin-left: 91.66%;`,
    `margin-left: 100%`
];
