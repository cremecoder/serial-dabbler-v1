import { memo } from "react"
import { useTheme } from "styled-components"

import DabbleButton from "./DabbleButton"
import {
  StyledDabblebar,
  FlexDabblebar
} from "../styles/Dabblebar.S/Dabblebar.styled"

const Dabblebar = ({ handleDabble }) => {
  const theme = useTheme()

  return (
    <StyledDabblebar>
      <FlexDabblebar>
        <DabbleButton
          text="LET'S DABBLE"
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
          handleDabble={handleDabble}
        />
      </FlexDabblebar>
    </StyledDabblebar>
  )
}
export default memo(Dabblebar)
