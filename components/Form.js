import { useTheme } from "styled-components"
import { DabbleButton } from "../styles/CallToAction.S/Buttons.styled"
import { StyledForm } from "../styles/Slide.S/SlideGridLower.styled"

const Form = () => {
  const theme = useTheme()

  return (
    <StyledForm>
      <label>Name</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Message</label>
      <textarea rows="5" cols="33"></textarea>
      <DabbleButton
        clrPrimary={theme.colors.white}
        clrSecondary={theme.colors.black}
        width={"50%"}
      >
        SUBMIT
      </DabbleButton>
    </StyledForm>
  )
}

export default Form
