import { DefaultTheme, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PFStardust from "../assets/fonts/PFStardust.ttf";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family : 'PFStardust';
    src : local('PFStardust'),url(${PFStardust}) format('truetype');
    font-style : normal;
  }

  * {
    box-sizing : border-box;
  }

  a {
    text-decoration : none;
    color:inherit;
  }
  
  body {
  }
`;

const color = {
  black: "#111",
  white: "#fff",
  // backgroundColor: "#F35E4B",
  backgroundColor: "#FFFFFF",
};

export type Color = typeof color;

export const theme: DefaultTheme = {
  color,
};
