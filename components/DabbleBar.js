import { useContext } from "react"
import { HomeContext } from "../pages/index"

import { useTheme } from "styled-components"
import { StyledDabbleBar, FlexDabbleBar } from "../styles/DabbleBar.styled"
import { DabbleButton } from "../styles/Buttons.styled"

const DabbleBar = () => {
  const { homeDispatch } = useContext(HomeContext)
  const theme = useTheme()

  return (
    <StyledDabbleBar>
      <FlexDabbleBar>
        <DabbleButton
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
          onClick={() => homeDispatch({ type: "TOGGLE" })}
        >
          <span>LET&apos;S DABBLE</span>
        </DabbleButton>
      </FlexDabbleBar>
    </StyledDabbleBar>
  )
}

export default DabbleBar
