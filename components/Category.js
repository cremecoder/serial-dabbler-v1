import { useTheme } from "styled-components"

import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"
import { DabbleButton } from "../styles/Buttons.styled"

const Category = ({ width }) => {
  const theme = useTheme()
  return (
    <StyledCategory>
      <SectionGrid>
        <span>LOOK &amp; FEEL</span>
        <h1>BOLD</h1>
        <LockIcon src="/images/lock-open.svg" />
        {width >= 1366 && (
          <DabbleButton
            clrPrimary={theme.colors.black}
            clrSecondary={theme.colors.white}
          >
            <span>LET'S DABBLE</span>
          </DabbleButton>
        )}
      </SectionGrid>
    </StyledCategory>
  )
}

export default Category
