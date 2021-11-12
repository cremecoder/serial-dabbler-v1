import { StyledNav, FlexNav } from "../styles/Navbar.styled"
import { AboutButton } from "../styles/Buttons.styled"
import { useTheme } from "styled-components"

const Navbar = () => {
  const theme = useTheme()

  return (
    <StyledNav>
      <div className="slide-content">
        <FlexNav>
          <h1>
            SERIAL
            <br /> DABBLER
          </h1>
          <AboutButton>X</AboutButton>
        </FlexNav>
      </div>
      <FlexNav>
        <h1>
          SERIAL
          <br /> DABBLER
        </h1>
        <AboutButton clrPrimary={theme.colors.white}>ABOUT</AboutButton>
      </FlexNav>
    </StyledNav>
  )
}

export default Navbar
