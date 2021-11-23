import { useContext, useState, useEffect } from "react"
import { useTheme } from "styled-components"

import { LayoutContext } from "../components/Layout"
import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"
import { DabbleButton } from "../styles/Buttons.styled"

const Category = ({ category }) => {
  const { width } = useContext(LayoutContext)
  const theme = useTheme()
  const { name, dabbles } = category
  const [currentDabble, setCurrentDabble] = useState(
    Math.floor(Math.random() * dabbles.length)
  )

  if (name === "Look & Feel") {
    console.log("Look & Feel rendered")
  }
  if (name === "Medium") {
    console.log("Medium rendered")
  }
  if (name === "Focus") {
    console.log("Focus rendered")
  }

  const handleDabble = () => {
    let newDabble = Math.floor(Math.random() * dabbles.length)
    if (newDabble === currentDabble) {
      handleDabble()
    } else {
      setCurrentDabble(newDabble)
    }
  }

  return (
    <StyledCategory bgColor={dabbles[currentDabble].color}>
      <SectionGrid>
        <span>{name}</span>
        <h1>{dabbles[currentDabble].name}</h1>
        <LockIcon src="/images/lock-open.svg" />
        {category.name === "Medium" && width >= 1366 && (
          <DabbleButton
            clrPrimary={theme.colors.black}
            clrSecondary={theme.colors.white}
            onClick={() => handleDabble()}
          >
            <span>LET'S DABBLE</span>
          </DabbleButton>
        )}
      </SectionGrid>
    </StyledCategory>
  )
}

export default Category
