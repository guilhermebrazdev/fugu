import { createTheme } from "@mui/material";

const baseColor = "#3978DC";

export const theme = createTheme({
  palette: {
    primary: {
      main: baseColor,
      light: "#6A9BE3",
      dark: "#2A5A9C",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    grey: {
      50: "#f9f9f9",
      100: "#f0f0f0",
      200: "#e0e0e0",
      300: "#d0d0d0",
      400: "#b0b0b0",
      500: "#909090",
      600: "#707070",
      700: "#505050",
      800: "#303030",
      900: "#101010",
    },
    text: {
      primary: "#333333",
      secondary: "#555555",
    },
  },
});
