import { AppContext } from "../pages/_app"
import { useContext } from "react"
import { StyledNav, FlexNav } from "../styles/Navbar.styled"
import { AboutButton } from "../styles/Buttons.styled"
import { useTheme } from "styled-components"

const Navbar = () => {
  const theme = useTheme()
  const isDesktop = useContext(AppContext)

  return (
    <StyledNav isDesktop={isDesktop}>
      <div className="slide-content">
        <FlexNav>
          <h1>
            SERIAL
            <br /> DABBLER
          </h1>
          <AboutButton clrPrimary={theme.colors.white}>
            <span>X</span>
          </AboutButton>
        </FlexNav>
      </div>
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
