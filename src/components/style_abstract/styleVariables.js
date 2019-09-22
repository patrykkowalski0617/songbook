const styleVariables = {
    color: {
        dark: `#000000`,
        light: `#ffffff`,
        mintcream: "#DEFFFA",
        mintsemi: "#6F807D",
        mintdark: "#37403F"
    },
    /// ogólne zasady przekazywać z App.js tworząc App = style.div`.class1{ style: style}`
    //
    colorScheme: [
        {
            name: "Instruments",

            bgImg: "",

            textBg1: "#260101", // darker
            textBg2: "#4D0202", // lighter

            textColor1: "#F2F1DF", // lighter
            textColor2: "#CCCBBC", // darker

            muted1: "#A6A598", // darker than textColor

            // contrast to bgImg
            contrast1: "#02593A", // darker
            contrast2: "#038054", // lighter

            primary1: "#A62F14",
            primary2: "#CC3918",

            secondary1: "#591902",
            sceondary2: "#802403"
        },
        {
            name: "scheme name",

            bgImg: "",

            textBg1: "#0C0C0C",
            textBg2: "#262626",

            textColor1: "#E6D7AA",
            textColor2: "#FFEEBD",

            muted1: "#8C7A58",
            muted2: "#A69068",

            primary1: "#A52D4B",
            primary2: "#BF3457",

            secondary1: "#177348",
            sceondary2: "#1C8C58"
        },
        {
            name: "scheme name",

            bgImg: "",

            textBg1: "#09121C",
            textBg2: "#112236",

            textColor1: "#D8D8E6",
            textColor2: "#F0F0FF",

            muted1: "#352B3D",
            muted2: "#4B3D57",

            primary1: "#F2E213",
            primary2: "#BF0404",

            secondary1: "#E6D712",
            sceondary2: "#FFEF14"
        }
    ],
    space: {
        s1: `0.4rem`,
        s2: `0.7rem`,
        s3: `1rem`,
        s4: `1.3rem`,
        s5: `1.6rem`,
        s6: `1.9rem`,
        s7: `2.2rem`
    },
    headerH: "60px",
    headerPadding: "10px",
    footerH: "40px",
    media: {
        s: "320px",
        m: "450px",
        l: "580px"
    }
};

export default styleVariables;
