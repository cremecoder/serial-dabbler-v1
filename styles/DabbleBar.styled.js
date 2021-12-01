import styled from "styled-components"

export const StyledDabbleBar = styled.aside`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0.5em;

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

export const FlexDabbleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
