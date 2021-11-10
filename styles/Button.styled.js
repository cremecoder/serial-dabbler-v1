import styled from "styled-components"

const Button = styled.button`
  background: transparent;
  color: ${props => props.clrPrimary};
  outline: none;
  border: 2px solid ${props => props.clrPrimary};
  padding: 1em 2em;
  cursor: pointer;
  transition: 300ms color, 300ms border, 300ms background-color;

  &:hover {
    color: ${props => props.clrSecondary};
    border: 2px solid ${props => props.clrSecondary};
    background-color: ${props => props.clrPrimary};
  }
`

export default Button
