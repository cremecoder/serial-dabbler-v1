import { Container } from "../styles/Containers.styled"
import { Flex } from "../styles/Flex.styled"
import StyledCategory from "../styles/Category.styled"

const Category = () => {
  return (
    <StyledCategory>
      <Container>
        <Flex>
          <div>
            <span>LOOK &amp; FEEL</span>
            <h1>BOLD</h1>
          </div>
          <span>LOCK</span>
        </Flex>
      </Container>
    </StyledCategory>
  )
}

export default Category
