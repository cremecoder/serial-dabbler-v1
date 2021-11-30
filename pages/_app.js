import Head from "next/head"
import dynamic from "next/dynamic"

const Layout = dynamic(() => import("../components/Layout"), { ssr: false })

import Theme from "../styles/Theme"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/Global"

function MyApp({ Component, pageProps }) {
  console.log("Appjs loaded")
  return (
    <>
      <Head>
        <title>Serial Dabbler - V1</title>
      </Head>
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
