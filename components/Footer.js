import { StyledFooter, FlexFooter } from "../styles/Footer.styled"
import { DabbleButton } from "../styles/Buttons.styled"
import { useTheme } from "styled-components"

const Footer = () => {
  const theme = useTheme()

  return (
    <StyledFooter>
      <FlexFooter>
        <DabbleButton
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
        >
          <span>LET'S DABBLE</span>
        </DabbleButton>
      </FlexFooter>
    </StyledFooter>
  )
}

export default Footer
