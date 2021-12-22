import styled from "styled-components"

export const StyledDabblebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1em 0.5em;

  button {
    display: initial;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet}) {
    padding: 1em 0;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    display: none;

    button {
      display: none;
    }
  }
`

export const FlexDabblebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
