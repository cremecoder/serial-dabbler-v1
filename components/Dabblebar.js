import { useTheme } from "styled-components"

import DabbleButton from "./DabbleButton"
import {
  StyledDabblebar,
  FlexDabblebar
} from "../styles/Dabblebar.S/Dabblebar.styled"

const Dabblebar = () => {
  const theme = useTheme()

  return (
    <StyledDabblebar>
      <FlexDabblebar>
        <DabbleButton
          text="LET'S DABBLE"
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
        />
      </FlexDabblebar>
    </StyledDabblebar>
  )
}
export default Dabblebar
