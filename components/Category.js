import { Container } from "../styles/Container.styled"
import { Flex } from "../styles/Flex.styled"
import { StyledCategory } from "../styles/Category.styled"

const Category = () => {
  return (
    <StyledCategory>
      <Container>
        <Flex>
          <div>
            <span>LOOK &amp; FEEL</span>
            <h1>BOLD</h1>
          </div>
          <div>
            <span>LOCK</span>
          </div>
        </Flex>
      </Container>
    </StyledCategory>
  )
}

export default Category
