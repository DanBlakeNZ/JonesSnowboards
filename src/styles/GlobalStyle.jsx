import { createGlobalStyle } from "styled-components";

// Import fonts added to be picked up and bundled by webpack
import BrandonRegular from "./fonts/BrandonRegular.otf";
import BrandonMedium from "./fonts/BrandonMedium.otf";
import BrandonBold from "./fonts/BrandonBold.otf";
import urw from "./fonts/UrwDinRegular.otf";

// @font-face references fonts in public folder
export default createGlobalStyle`
  @font-face {
    font-family: BrandonRegular;
    src: url("/fonts/BrandonRegular.otf") format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: BrandonMedium;
    src: url("/fonts/BrandonMedium.otf") format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: BrandonBold;
    src: url("/fonts/BrandonBold.otf") format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: urw;
    src: url("/fonts/UrwDinRegular.otf") format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    outline: none;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5% !important;
  }

  body{
    font-family: urw, sans-serif;
    font-size: 1.3rem;
  }

  a {
    color: #000;
    text-decoration: none;
    transition: color 100ms ease;
  }

  /* GLOBAL CLASSES */
  .center{
    margin: 0px auto;
  }

  .flex-end{
    justify-content: flex-end;
  }

  .border-light{
    color: ${({ theme }) => theme.colors.borderGreyLight};
  }

  .border-bottom{
    line-height: 0;
    min-height: 0;
    border-bottom: 0.1rem solid;
  }

  .margin-top-1{
    margin-top: 1rem;
  }

  /* GRID STYLES */
  [class^="col"] {
    float: left;
  }

  .col-33{
    width: calc(100% / 3);
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      width: 100%;
    }
  }

  /* MOBILE SPECIFIC STYLES */
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      .mobile-hide{
        display: none !important;
      }
    }
`;
