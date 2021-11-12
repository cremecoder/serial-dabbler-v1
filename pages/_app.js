import { createContext, useState, useEffect } from "react"

import Meta from "../components/Meta"
import Layout from "../components/Layout"

import Theme from "../styles/Theme"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/Global"

export const AppContext = createContext()

// App state pass isMobile and isDesktop to components
// used for navbar transition direction
// used for footer & button hide/show

function MyApp({ Component, pageProps }) {
  const [isDesktop, setIsDesktop] = useState(false)

  // Doesn’t display when going from portrait to landscape ipad large or desktop
  // Window is undefined any other way because of Next pre-rendering
  useEffect(() => {
    if (window.innerWidth >= 1366) {
      setIsDesktop(true)
    }
  }, [])

  return (
    <>
      <Meta />
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <AppContext.Provider value={isDesktop}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
