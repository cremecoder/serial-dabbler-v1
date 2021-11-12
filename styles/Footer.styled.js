import styled from "styled-components"

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0.5em 0;

  @media (min-width: ${({ theme }) => theme.breaks.tablet}) {
    padding: 1em 0;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    display: none;
    /* position: absolute;
    bottom: 10%;
    left: 50%;
    background: transparent;
    button {
      color: black;
      border: 2px solid black;
    } */
  }
`

export const FlexFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledFooter
