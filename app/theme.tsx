import { createTheme } from "@mui/material";

const mainColor = "#6b34eb";
const secondaryColor = "#34eb95";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: "#FFF",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: "#121212",
    },
  },
});
