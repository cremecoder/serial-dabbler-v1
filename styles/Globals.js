import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    max-width: 80%;
    padding: 1rem;
  } 

`

export default GlobalStyles
