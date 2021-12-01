import Image from "next/image"
import { useContext, useState, useEffect } from "react"
import { useTheme } from "styled-components"
import { LayoutContext } from "../components/Layout"

import { StyledNav, FlexNav, OverlayButton } from "../styles/Navbar.styled"
import CloseButton from "../styles/CloseButton"

const Navbar = () => {
  const theme = useTheme()
  const { isOverlayOpen, handleOverlayToggle } = useContext(LayoutContext)

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
        {isOverlayOpen && navState.width >= 1366 ? (
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
