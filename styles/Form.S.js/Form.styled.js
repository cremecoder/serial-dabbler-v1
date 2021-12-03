import styled from "styled-components"

const StyledForm = styled.form`
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

export default StyledForm
