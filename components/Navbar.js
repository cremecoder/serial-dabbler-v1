import { StyledNav, FlexNav } from "../styles/Navbar.styled"
import { Slide } from "../styles/Slide.styled"

const Navbar = () => {
  return (
    <StyledNav>
      <FlexNav>
        <h1>
          SERIAL
          <br /> DABBLER
        </h1>
        <span>ABOUT</span>
      </FlexNav>
    </StyledNav>
  )
}

export default Navbar
