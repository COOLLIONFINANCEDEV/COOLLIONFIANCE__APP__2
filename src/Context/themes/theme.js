import { createTheme } from "@mui/material";
import palette from "./palette";
import { styleOverrides, Typographie } from "./Typographie";
import Breakponts from "./BreakPonts";
import {size,width} from "./size";

const theme = createTheme({
  palette: palette,
  typography: Typographie,
  breakpoints: Breakponts,
  size:size,
  width: width,
  components: {
    MuiCssBaseline: {
      styleOverrides: styleOverrides,
    },
  },
});

export default theme;
