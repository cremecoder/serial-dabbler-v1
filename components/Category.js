import { Container, Grid } from "../styles/Utils.styled"
import { StyledCategory } from "../styles/Category.styled"

const Category = () => {
  return (
    <StyledCategory>
      <Container>
        <Grid>
          <span>LOOK &amp; FEEL</span>
          <h1>BOLD</h1>
          <p>LOCK</p>
        </Grid>
      </Container>
    </StyledCategory>
  )
}

export default Category
