import { createContext, useState } from "react"

import Wrapper from "../styles/Wrapper.S/Wrapper.styled"
import Navbar from "./Navbar"

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
