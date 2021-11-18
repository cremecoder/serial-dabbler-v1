import { useContext, useState } from "react"
import { LayoutContext } from "../components/Layout"

import { StyledNav, FlexNav } from "../styles/Navbar.styled"
import Slide from "../styles/Slide.styled"
import { AboutButton } from "../styles/Buttons.styled"
import { useTheme } from "styled-components"
import { Transition } from "react-transition-group"

const Navbar = () => {
  const theme = useTheme()
  const { width } = useContext(LayoutContext)
  const [toggle, setToggle] = useState(false)

  return (
    <StyledNav>
      <Transition in={toggle} timeout={300}>
        {state => (
          <Slide width={width} state={state}>
            <FlexNav>
              <h1>
                SERIAL
                <br /> DABBLER
              </h1>
              <AboutButton
                onClick={() => setToggle(!toggle)}
                clrPrimary={theme.colors.white}
              >
                <span>X</span>
              </AboutButton>
            </FlexNav>
          </Slide>
        )}
      </Transition>
      <FlexNav>
        <h1>
          SERIAL
          <br /> DABBLER
        </h1>
        <AboutButton
          onClick={() => setToggle(!toggle)}
          clrPrimary={theme.colors.white}
        >
          <span>ABOUT</span>
        </AboutButton>
      </FlexNav>
    </StyledNav>
  )
}

export default Navbar
