import { StyledNav, FlexNav } from "../styles/Navbar.styled"
import { Slide } from "../styles/Slide.styled"

const Navbar = () => {
  return (
    <StyledNav>
      <div className="slide-content">
        <FlexNav>
          <h1>
            SERIAL
            <br /> DABBLER
          </h1>
          <span>X</span>
        </FlexNav>
      </div>
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
