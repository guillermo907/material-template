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
  },
});
