import { Container } from "../styles/Container.styled"
import { Flex } from "../styles/Flex.styled"
import { StyledNav, Logo } from "../styles/Navbar.styled"

const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <Flex>
          <h1>
            SERIAL
            <br />
            DABBLER
          </h1>
          <span>ABOUT</span>
        </Flex>
      </Container>
    </StyledNav>
  )
}

export default Navbar
