import Image from "next/image"
import { useContext, useState, useEffect } from "react"
import { useTheme } from "styled-components"

import { LayoutStateContext, SetLayoutStateContext } from "../components/Layout"

import { StyledNav, FlexNav } from "../styles/Navbar.S/Navbar.styled"
import {
  CloseButton,
  OverlayButton
} from "../styles/CallToAction.S/Buttons.styled"

const Navbar = () => {
  const theme = useTheme()
  const { isOverlayOpen } = useContext(LayoutStateContext)
  const { handleOverlayToggle } = useContext(SetLayoutStateContext)

  const [navState, setNavState] = useState({
    width: window.innerWidth
  })

  const handleResize = () => {
    setNavState(prev => ({
      ...prev,
      width: window.innerWidth
    }))
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  console.log("Navbar")
  return (
    <StyledNav>
      <FlexNav>
        <Image
          src="/images/logo.svg"
          alt="Serial Dabbler"
          width={75}
          height={50}
        />
        {isOverlayOpen ? (
          ""
        ) : (
          <OverlayButton
            onClick={() => handleOverlayToggle()}
            clrPrimary={theme.colors.white}
          >
            {isOverlayOpen ? <CloseButton /> : <span>ABOUT</span>}
          </OverlayButton>
        )}
      </FlexNav>
      {isOverlayOpen && navState.width < 1366 && <hr />}
    </StyledNav>
  )
}

export default Navbar
