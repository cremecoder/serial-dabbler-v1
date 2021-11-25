import { useContext } from "react"
// import { useTheme } from "styled-components"

import { LayoutContext } from "../components/Layout"
import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"
// import { DabbleButton } from "../styles/Buttons.styled"

const Category = ({ category }) => {
  const { width } = useContext(LayoutContext)
  // const theme = useTheme()
  const { id, name, dabbles } = category
  console.log(dabbles)

  return (
    <StyledCategory
    // bgColor={dabbles[randomDabbleNum].color}
    >
      <SectionGrid>
        {/* <span>{name}</span>
        <h1>{dabbles[randomDabbleNum].name}</h1> */}
        <LockIcon src="/images/lock-open.svg" />
        {/* {name === "Medium" && width >= 1366 && (
          <DabbleButton
            clrPrimary={theme.colors.black}
            clrSecondary={theme.colors.white}
            // onClick={() => homeDispatch({ type: [name] })}
          >
            <span>LET'S DABBLE</span>
          </DabbleButton>
        )} */}
      </SectionGrid>
    </StyledCategory>
  )
}

export default Category
