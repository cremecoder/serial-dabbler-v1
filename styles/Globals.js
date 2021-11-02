import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Bolden Regular";
  src: url("/fonts/BoldenRegularRegular.woff") format("woff");
  font-style: normal;
  font-weight: bold;
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

  h1,h2 {
    font-family: "Bolden Regular";
  }

`

export default GlobalStyles

// Mobile - 375px

// Category Sml: 12px Medium DM Sans
// Category Big: 55px BoldenRR
// Category Icn: width=28px height=28px ??????

// Logo : 24px BoldenRR
// About: 14px Medium DM Sans
// Buton: 14px Medium DM Sans

//=====================================

// Tablet - 768px

// Category Sml: 16px Medium DM Sans
// Category Big: 80px BoldenRR
// Category Icn: width=40px height=40px ??????

// Logo : 34px BoldenRR
// About: 16px Medium DM Sans
// Buton: 16px Medium DM Sans

//=====================================

// Desktop - 1366px

// Category Sml: 16px Medium DM Sans
// Category Big: 80px BoldenRR
// Category Icn: width=40px height=40px ??????

// Logo : 34px BoldenRR
// About: 16px Medium DM Sans
// Buton: 16px Medium DM Sans

//=====================================
