import styled from "styled-components"

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0.5em 1.5em;

  @media (min-width: ${({ theme }) => theme.breaks.tablet}) {
    padding: 1em 2em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    display: none;
  }
`

export const FlexFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledFooter
