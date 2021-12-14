import styled from "styled-components"
import { useTheme } from "styled-components"

import { DabbleButton } from "../styles/CallToAction.S/Buttons.styled"
import { StyledForm } from "../styles/Slide.S/SlideGrid.styled"

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`

const Error = styled.span`
  margin-top: 0.5em;
  color: white;
`

const Form = () => {
  const theme = useTheme()

  return (
    <StyledForm
      name="serial contact v1"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      clrPrimary={theme.colors.black}
      clrSecondary={theme.colors.white}
    >
      <input type="hidden" name="form-name" value="serial contact v1" />
      <StyledField>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" autoComplete="off" />
      </StyledField>
      <StyledField>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" autoComplete="off" />
      </StyledField>
      <StyledField>
        <label htmlFor="message">Message</label>
        <textarea autoComplete="off"></textarea>
      </StyledField>
      <StyledField>
        <DabbleButton
          type="submit"
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
          width={"40%"}
        >
          SUBMIT
        </DabbleButton>
      </StyledField>
    </StyledForm>
  )
}

export default Form
