import { useTheme } from "styled-components"

import { StyledDabbleBar, FlexDabbleBar } from "../styles/DabbleBar.styled"
import { DabbleButton } from "../styles/Buttons.styled"

const DabbleBar = () => {
  const theme = useTheme()

  return (
    <StyledDabbleBar>
      <FlexDabbleBar>
        <DabbleButton
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
        >
          <span>LET'S DABBLE</span>
        </DabbleButton>
      </FlexDabbleBar>
    </StyledDabbleBar>
  )
}

export default DabbleBar
