import { Container, Flex } from "../styles/Utils.styled"
import StyledFooter from "../styles/Footer.styled"
import { Button } from "../styles/Buttons.styled"

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex direction={"row"} justify={"center"} align={"center"}>
          <Button>
            <span>LET'S DABBLE</span>
          </Button>
        </Flex>
      </Container>
    </StyledFooter>
  )
}

export default Footer
