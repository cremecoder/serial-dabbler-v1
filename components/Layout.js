import dynamic from "next/dynamic"
import { createContext, useState } from "react"

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false })

import Wrapper from "../styles/Wrapper.S/Wrapper.styled"

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
