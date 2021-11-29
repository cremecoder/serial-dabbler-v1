import { useContext } from "react"
import { useTheme } from "styled-components"
import { LayoutContext } from "../components/Layout"

import { StyledNav, FlexNav } from "../styles/Navbar.styled"
import { AboutButton } from "../styles/Buttons.styled"

const Navbar = () => {
  const theme = useTheme()
  const {
    size: { width },
    isOverlayOpen,
    setIsOverlayOpen
  } = useContext(LayoutContext)

  return (
    <StyledNav>
      <FlexNav>
        <h1>
          SERIAL
          <br /> DABBLER
        </h1>
        <AboutButton
          onClick={() => setIsOverlayOpen(!isOverlayOpen)}
          clrPrimary={theme.colors.white}
        >
          <span>{isOverlayOpen ? "X" : "ABOUT"}</span>
        </AboutButton>
      </FlexNav>
      {isOverlayOpen && width <= 1366 && <hr />}
    </StyledNav>
  )
}

export default Navbar
