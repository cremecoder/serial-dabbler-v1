import Meta from "../components/Meta"
import Layout from "../components/Layout"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/Global"

const theme = {
  colors: {
    one: "#FF7EC9",
    two: "#D5D5D5",
    three: "#3B4CD1",
    black: "#000000",
    white: "#ffffff"
  },
  breaks: {
    tablet: "768px",
    desktop: "1366px"
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp

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
