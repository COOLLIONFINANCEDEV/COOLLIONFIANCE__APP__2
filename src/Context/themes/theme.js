import { createTheme } from "@mui/material";
import palette from "./palette";
import { styleOverrides, Typographie } from "./Typographie";
import Breakponts from "./BreakPonts";

const theme = createTheme({
  palette: palette,
  typography: Typographie,
  breakpoints: Breakponts,
  components: {
    MuiCssBaseline: {
      styleOverrides: styleOverrides,
    },
  },
});

export default theme;
