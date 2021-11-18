import { createContext, useState, useEffect } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import Wrapper from "../styles/Wrapper.styled"

// Create Layout context?
export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth])
  const [height, width] = size
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <LayoutContext.Provider
      value={{ height, width, isOverlayOpen, setIsOverlayOpen }}
    >
      <Wrapper>
        <Navbar />
        {children}
        <Footer />
      </Wrapper>
    </LayoutContext.Provider>
  )
}

export default Layout
