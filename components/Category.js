import { useContext, useState, useEffect } from "react"
import { useTheme } from "styled-components"

import { LayoutContext } from "../components/Layout"
import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"
import { DabbleButton } from "../styles/Buttons.styled"

const Category = ({ category, homeState, homeDispatch }) => {
  const { width } = useContext(LayoutContext)
  const theme = useTheme()

  return (
    <StyledCategory
      bgColor={
        category.dabbles[homeState[category.name].randomizeDabbleNum].color
      }
    >
      <SectionGrid>
        <span>{category.name}</span>
        <h1>{category.dabbles[homeState.name.randomizeDabbleNum].name}</h1>
        <LockIcon src="/images/lock-open.svg" />
        {category.name === "Medium" && width >= 1366 && (
          <DabbleButton
            clrPrimary={theme.colors.black}
            clrSecondary={theme.colors.white}
            onClick={() => homeDispatch({ type: [category.name] })}
          >
            <span>LET'S DABBLE</span>
          </DabbleButton>
        )}
      </SectionGrid>
    </StyledCategory>
  )
}

export default Category
