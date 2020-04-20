import { createGlobalStyle } from "styled-components";
import brandon from "../fonts/Brandon_reg.otf";
import urw from "../fonts/urw_din_reg.otf";

export default createGlobalStyle`
 @font-face {
    font-family: 'brandon';
    src: url(${brandon}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

   @font-face {
    font-family: 'urw';
    src: url(${urw}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    outline: none;
}

  html {
    font-size: 62.5% !important;
}

  body{
    font-family: 'urw-din', sans-serif;
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

  /* GRID STYLES */
  [class^="col"] {
    float: left;
  }

  .col-33{
    width: calc(100% / 3 - 1rem);
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
