import { useContext } from "react"
import { LayoutContext } from "../components/Layout"

import { StyledNav, FlexNav } from "../styles/Navbar.styled"
import Slide from "../styles/Slide.styled"
import { AboutButton } from "../styles/Buttons.styled"
import { useTheme } from "styled-components"

const Navbar = () => {
  const theme = useTheme()
  const { width } = useContext(LayoutContext)

  return (
    <StyledNav>
      <Slide width={width}>
        <FlexNav>
          <h1>
            SERIAL
            <br /> DABBLER
          </h1>
          <AboutButton clrPrimary={theme.colors.white}>
            <span>X</span>
          </AboutButton>
        </FlexNav>
      </Slide>
      <FlexNav>
        <h1>
          SERIAL
          <br /> DABBLER
        </h1>
        <AboutButton clrPrimary={theme.colors.white}>
          <span>ABOUT</span>
        </AboutButton>
      </FlexNav>
    </StyledNav>
  )
}

export default Navbar
