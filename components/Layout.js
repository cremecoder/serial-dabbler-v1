import { createContext, useState } from "react"

import Wrapper from "../styles/Wrapper.S/Wrapper.styled"
import Navbar from "./Navbar"

export const LayoutStateContext = createContext()
export const LayoutHandleContext = createContext()

const Layout = ({ children }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const handleOverlayToggle = () => {
    setIsOverlayOpen(prev => !prev)
  }

  return (
    <LayoutStateContext.Provider value={{ isOverlayOpen }}>
      <LayoutHandleContext.Provider value={{ handleOverlayToggle }}>
        <Wrapper>
          <Navbar />
          {children}
        </Wrapper>
      </LayoutHandleContext.Provider>
    </LayoutStateContext.Provider>
  )
}

export default Layout
