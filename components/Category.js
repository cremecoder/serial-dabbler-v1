import { useContext } from "react"
import { useTheme } from "styled-components"

import { LayoutContext } from "../components/Layout"
import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"
import { DabbleButton } from "../styles/Buttons.styled"

const Category = ({ category }) => {
  const { width } = useContext(LayoutContext)
  const theme = useTheme()
  const { name, dabbles } = category
  let clr = dabbles[0].color

  return (
    <StyledCategory>
      <SectionGrid bgColor={clr}>
        <span>{name}</span>
        <h1>{dabbles[0].name}</h1>
        <LockIcon src="/images/lock-open.svg" />
        {name === "Medium" && width >= 1366 && (
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
