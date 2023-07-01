import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6b34eb",
    },
    secondary: {
      main: "#34eb95",
    },
    background: {
      /* #121212 is the default material color */
      default: "#FFF",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6b34eb",
    },
    secondary: {
      main: "#34eb95",
    },
    background: {
      /* #121212 is the default material color */
      default: "#121212",
    },
  },
});
