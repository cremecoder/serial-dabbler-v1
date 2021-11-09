import styled from "styled-components"

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.25em 1.25em;

  h1 {
    font-size: 24px;
  }

  span {
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    padding: 0.25em 2em;

    h1 {
      font-size: 34px;
    }

    span {
      font-size: 16px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    padding: 0.25em 3em;
  }
`

export const FlexNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    flex-direction: column;
    height: 100%;
  }
`
