import { createTheme } from "@mui/material";
import palette from "./palette";
import { styleOverrides, Typographie } from "./Typographie";
import Breakponts from "./BreakPonts";
import {width} from "./size";

const theme = createTheme({
  palette: palette,
  typography: Typographie,
  breakpoints: Breakponts,
  width: width,
  components: {
    MuiCssBaseline: {
      styleOverrides: styleOverrides,
    },
  },
});

export default theme;
