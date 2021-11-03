import { Container, Flex } from "../styles/Utils.styled"
import { StyledNav } from "../styles/Navbar.styled"

const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <Flex direction={"row"} justify={"space-between"} align={"center"}>
          <h1>
            SERIAL
            <br /> DABBLER
          </h1>
          <span>ABOUT</span>
        </Flex>
      </Container>
    </StyledNav>
  )
}

export default Navbar
