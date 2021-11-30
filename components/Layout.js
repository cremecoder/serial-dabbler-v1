import { createContext, useState, useEffect } from "react"

import Navbar from "./Navbar"
import Wrapper from "../styles/Wrapper.styled"

export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const [layoutState, setLayoutState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isOverlayOpen: false
  })

  const { width, height, isOverlayOpen } = layoutState

  const handleResize = () => {
    setLayoutState(prev => ({
      ...prev,
      width: window.innerWidth,
      height: window.innerHeight
    }))
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleOverlayToggle = () => {
    setLayoutState(prev => ({
      ...prev,
      isOverlayOpen: !isOverlayOpen
    }))
  }

  return (
    <LayoutContext.Provider
      value={{ width, height, isOverlayOpen, handleOverlayToggle }}
    >
      <Wrapper>
        <Navbar />
        {children}
      </Wrapper>
    </LayoutContext.Provider>
  )
}

export default Layout
