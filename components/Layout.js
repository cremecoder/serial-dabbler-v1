import { createContext, useState, useEffect } from "react"

import Navbar from "./Navbar"
import Wrapper from "../styles/Wrapper.styled"

// Create Layout context?
export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setSize(prev => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight
      }))
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <LayoutContext.Provider value={{ size, isOverlayOpen, setIsOverlayOpen }}>
      <Wrapper>
        <Navbar />
        {children}
      </Wrapper>
    </LayoutContext.Provider>
  )
}

export default Layout
