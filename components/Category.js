import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"
import Button from "../styles/Button.styled"

const Category = ({ isDesktop }) => {
  return (
    <StyledCategory>
      <SectionGrid>
        <span>LOOK &amp; FEEL</span>
        <h1>BOLD</h1>
        <LockIcon src="/images/lock-open.svg" />
        {isDesktop ? (
          <Button>
            <span>LET'S DABBLE</span>
          </Button>
        ) : (
          ""
        )}
      </SectionGrid>
    </StyledCategory>
  )
}

export default Category
