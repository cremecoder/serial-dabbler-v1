import styled from "styled-components"
import { useTheme } from "styled-components"

import DabbleButton from "./DabbleButton"
import { StyledForm } from "../styles/Slide.S/SlideGrid.styled"

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`

const Form = () => {
  const theme = useTheme()

  return (
    <StyledForm
      name="serial contact v1"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
      clrPrimary={theme.colors.black}
      clrSecondary={theme.colors.white}
    >
      <input type="hidden" name="form-name" value="serial contact v1" />
      <div hidden>
        <input name="bot-field" />
      </div>
      <StyledField>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" autoComplete="off" required />
      </StyledField>
      <StyledField>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          required
        />
      </StyledField>
      <StyledField>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          autoComplete="off"
          required
        ></textarea>
      </StyledField>
      <StyledField>
        <DabbleButton
          type="submit"
          text="SUBMIT"
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
          width={"40%"}
        />
      </StyledField>
    </StyledForm>
  )
}

export default Form
