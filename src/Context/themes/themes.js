import palette from "./palette";
import { styleOverrides, Typographie } from "./Typographie";
import Breakponts from "./BreakPonts";

const themes = {
  palette: palette,
  typography: Typographie,
  breakpoints: Breakponts,
  components: {
    MuiCssBaseline: {
      styleOverrides: styleOverrides,
    },
  },
};

export default themes;
