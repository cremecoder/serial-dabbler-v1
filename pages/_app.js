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
    tablet: "768px"
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
