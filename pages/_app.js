import Layout from "../components/Layout"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/Globals"

const theme = {
  colors: {
    categoryOne: "#FF7EC9",
    categoryTwo: "#D5D5D5",
    categoryThree: "#3B4CD1",
    black: "#000000",
    white: "#ffffff"
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
