import Head from "next/head"
import { ThemeProvider } from "styled-components"

import Layout from "../components/Layout"
import Theme from "../styles/Theme"

import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Serial Dabbler - V1</title>
      </Head>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
