import { colorsTuple, createTheme } from "@mantine/core";

const primaryColor = colorsTuple("#1964FD");
const secondaryColor = colorsTuple("#009D8E");

export const theme = createTheme({
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
  },
  primaryColor: "primary",
  fontFamily: "Inter, sans-serif",
});
