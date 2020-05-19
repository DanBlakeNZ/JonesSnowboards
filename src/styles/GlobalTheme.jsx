import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  breakpoints: {
    xsmall: "319px",
    small: "479px",
    medium: "767px",
    large: "979px",
    xlarge: "1279px",
  },
  sizes: {
    maxWidth: "1280px;",
  },
  colors: {
    aqua: "#007799",
    grey: "#555555",
    lightGrey: "#f9f9f9",
    borderGreyLight: "#eee",
  },
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
};

const GlobalTheme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default GlobalTheme;
