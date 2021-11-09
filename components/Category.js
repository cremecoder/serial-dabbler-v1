import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"

const Category = () => {
  return (
    <StyledCategory>
      <SectionGrid>
        <span>LOOK &amp; FEEL</span>
        <h1>BOLD</h1>
        <LockIcon src="/images/lock-open.svg" />
      </SectionGrid>
    </StyledCategory>
  )
}

export default Category
