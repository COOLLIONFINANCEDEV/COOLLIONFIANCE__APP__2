import calibri from "../../assets/fonts/calibri/Calibri.ttf";
import gordita from "../../assets/fonts/gordita/Gordita.woff";
import helvetica from "../../assets/fonts/helvetica/Helvetica.ttf";

export const Typographie = {
  fontFamily: "Calibri, Helvetica, Gordita Regular",
};

export const styleOverrides = `
    @font-face {
    font-family: 'Calibri';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:url(${calibri});
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    },

    @font-face {
        font-family: 'Helvetica';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src:url(${helvetica});
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    },

    @font-face {
        font-family: 'Gordita Regular';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src:local('Gordita Regular'), url(${gordita}) format('woff');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    }
`;
