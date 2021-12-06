import dynamic from "next/dynamic"
import { createContext, useState } from "react"

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false })

import Wrapper from "../styles/Wrapper.S/Wrapper.styled"

export const LayoutStateContext = createContext()
export const SetLayoutStateContext = createContext()

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
    <LayoutStateContext.Provider value={{ isOverlayOpen }}>
      <SetLayoutStateContext.Provider value={{ handleOverlayToggle }}>
        <Wrapper>
          <Navbar />
          {children}
        </Wrapper>
      </SetLayoutStateContext.Provider>
    </LayoutStateContext.Provider>
  )
}

export default Layout
