import { StyledFooter, FlexFooter } from "../styles/Footer.styled"
import Button from "../styles/Button.styled"
import { useTheme } from "styled-components"

const Footer = () => {
  const theme = useTheme()

  return (
    <StyledFooter>
      <FlexFooter>
        <Button
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
        >
          <span>LET'S DABBLE</span>
        </Button>
      </FlexFooter>
    </StyledFooter>
  )
}

export default Footer
