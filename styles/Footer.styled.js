import styled from "styled-components"

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  text-align: center;
`

export const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 1em 2em;
`
