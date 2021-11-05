import styled from "styled-components"

const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 1em 2em;
  cursor: pointer;
  transition: 300ms color, 300ms border, 300ms background-color;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export default Button
