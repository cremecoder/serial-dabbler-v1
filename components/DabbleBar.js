import { useTheme } from "styled-components"
import { StyledDabbleBar, FlexDabbleBar } from "../styles/DabbleBar.styled"
import { DabbleButton } from "../styles/Buttons.styled"

const DabbleBar = ({ handleDabble }) => {
  const theme = useTheme()
  // console.log("Dabblebar rendered")
  return (
    <StyledDabbleBar>
      <FlexDabbleBar>
        <DabbleButton
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
          onClick={() => handleDabble()}
        >
          <span>LET&apos;S DABBLE</span>
        </DabbleButton>
      </FlexDabbleBar>
    </StyledDabbleBar>
  )
}

export default DabbleBar
