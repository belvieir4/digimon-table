import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03A9F4",
    },
    secondary: {
      main: "#FF9800",
    },
    background: {
      default: "#EEE",
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

export default theme;
