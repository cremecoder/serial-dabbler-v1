import { useTheme } from "styled-components"
import {
  StyledDabblebar,
  FlexDabblebar
} from "../styles/Dabblebar.S/Dabblebar.styled"
import { DabbleButton } from "../styles/CallToAction.S/Buttons.styled"

export const Dabblebar = ({ handleDabble }) => {
  const theme = useTheme()

  return (
    <StyledDabblebar>
      <FlexDabblebar>
        <DabbleButton
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
          onClick={() => handleDabble()}
        >
          <span>LET&apos;S DABBLE</span>
        </DabbleButton>
      </FlexDabblebar>
    </StyledDabblebar>
  )
}
