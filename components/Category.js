import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"
import Button from "../styles/Button.styled"
import { useTheme } from "styled-components"

const Category = ({ isDesktop }) => {
  const theme = useTheme()
  return (
    <StyledCategory>
      <SectionGrid>
        <span>LOOK &amp; FEEL</span>
        <h1>BOLD</h1>
        <LockIcon src="/images/lock-open.svg" />
        {isDesktop ? (
          <Button
            clrPrimary={theme.colors.black}
            clrSecondary={theme.colors.white}
          >
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
