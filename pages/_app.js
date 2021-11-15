import dynamic from "next/dynamic"

import Meta from "../components/Meta"
// import Layout from "../components/Layout"
const Layout = dynamic(() => import("../components/Layout"), { ssr: false })

import Theme from "../styles/Theme"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/Global"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
