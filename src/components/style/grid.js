import { space } from "./styleVariables";

const col = `display: block; padding: 0 ${space.s2};`;

export const grid = {
    containerFluid: `
        margin: 0 auto;
        padding: ${space.s2};
   `,
    container: `
        max-width: 700px;
        margin: 0 auto;
        padding: ${space.s2};
   `,
    verticalPadding: `
        padding-top: ${space.s2};
        padding-bottom: ${space.s2};
   `,
    section: `
        padding: ${space.s3} 0 ${space.s6} 0;
   `,
    row: ` 
        margin-left: -${space.s2};
        margin-right: -${space.s2};
        display: flex;
        flex-flow: row wrap;
   `,
    // col[0] == auto size
    col: [
        `
            ${col}
   	    `,
        `
      		${col}
      		max-width: 8.33%;
      		flex: 0 0 8.33%;
   		`,
        `
			${col}
			max-width: 16.66%;
			flex: 0 0 16.66%;
		`,
        `
			${col}
			max-width: 25%;
			flex: 0 0 25%;
		`,
        `
			${col}
			max-width: 33.33%;
			flex: 0 0 33.33%;
		`,
        `
			${col}
			max-width: 41.66%;
			flex: 0 0 41.66%;
		`,
        `
			${col}
			max-width: 50%;
			flex: 0 0 50%;
		`,
        `
			${col}
			max-width: 58.33%;
			flex: 0 0 58.33%;
		`,
        `
			${col}
			max-width: 66.66%;
			flex: 0 0 66.66%;
		`,
        `
			${col}
			max-width: 75%;
			flex: 0 0 75%;
		`,
        `
			${col}
			max-width: 83.33%;
			flex: 0 0 83.33%;
		`,
        `
			${col}
			max-width: 91.66%;
			flex: 0 0 91.66%;
		`,
        `
			${col}
			max-width: 100%;
			flex: 0 0 100%;
		`
    ],
    off: [
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
    ]
};
