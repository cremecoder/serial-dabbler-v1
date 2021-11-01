import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "DM Sans";
  src: url("./fonts/DM_Sans/DMSans-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "DM Sans";
  src: url("./fonts/DM_Sans/DMSans-Medium.ttf");
  font-style: medium;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Bolden Regular";
  src: url("./fonts/Bolden-Display_Hust.otf");
  font-style: bold;
  font-weight: 700;
  font-display: swap;
}

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "DM Sans", "sans-serif";
    min-height: 100vh;
  } 

`

export default GlobalStyles
