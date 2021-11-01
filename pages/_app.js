import Layout from "../components/Layout"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/Globals"

const theme = {
  colors: {
    primary: "#",
    secomdary: "#",
    black: "#333333",
    white: "#f9f9f9"
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
