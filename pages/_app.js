import Head from "next/head"
import { ThemeProvider } from "styled-components"

import Theme from "../styles/Theme"
import Wrapper from "../components/Wrapper"

import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Serial Dabbler</title>
        <link rel="icon" href="/images/favicon.jpg" />
      </Head>
      <ThemeProvider theme={Theme}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default MyApp
