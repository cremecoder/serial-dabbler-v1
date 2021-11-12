import Meta from "../components/Meta"
import Layout from "../components/Layout"

import Theme from "../styles/Theme"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/Global"

// App state pass isMobile and isDesktop to components
// used for navbar transition direction
// used for footer & button hide/show

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
