import Head from "next/head"
import dynamic from "next/dynamic"

const Layout = dynamic(() => import("../components/Layout"), { ssr: false })

import Theme from "../styles/Theme"
import { ThemeProvider } from "styled-components"
// import GlobalStyles from "../styles/Global"
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Serial Dabbler - V1</title>
      </Head>
      <ThemeProvider theme={Theme}>
        {/* <GlobalStyles /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
