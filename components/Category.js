import {
  StyledCategory,
  GridCategory,
  LockIcon
} from "../styles/Category.styled"

const Category = () => {
  return (
    <StyledCategory>
      <GridCategory>
        <span>LOOK &amp; FEEL</span>
        <h1>BOLD</h1>
        <LockIcon src="/images/lock-open.svg" />
      </GridCategory>
    </StyledCategory>
  )
}

export default Category
