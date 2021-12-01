import { createContext, useState } from "react"

import Navbar from "./Navbar"
import Wrapper from "../styles/Wrapper.styled"

export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const [layoutState, setLayoutState] = useState({
    isOverlayOpen: false
  })

  const { isOverlayOpen } = layoutState

  const handleOverlayToggle = () => {
    setLayoutState(prev => ({
      ...prev,
      isOverlayOpen: !isOverlayOpen
    }))
  }

  console.log("Layout")
  return (
    <LayoutContext.Provider value={{ isOverlayOpen, handleOverlayToggle }}>
      <Wrapper>
        <Navbar />
        {children}
      </Wrapper>
    </LayoutContext.Provider>
  )
}

export default Layout
