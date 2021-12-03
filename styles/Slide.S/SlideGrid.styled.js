import styled from "styled-components"

export const SlideGrid = styled.div``

export const StyledBlockText = styled.div``

export const StyledParaText = styled.div``

export const SocialDiv = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5em;

  svg {
    margin-right: 0.5em;
  }
`

export const FormText = styled.div`
  h1 {
    padding-bottom: 0.5em;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    padding: 1em 0 0.5em 0;
  }

  input,
  textarea {
    padding: 0.25em;
    letter-spacing: 0.5px;
    font-size: 1.5em;
    line-height: 1.5;
    outline: none;
    border: 1px solid white;
    background-color: transparent;
    color: white;
  }

  button {
    margin: 2em 0 3em 0;
  }
`
