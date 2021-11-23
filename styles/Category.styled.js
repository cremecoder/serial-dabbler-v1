import styled from "styled-components"

export const StyledCategory = styled.section`
  /* Mobile XS - Portrait */
  background-color: ${({ bgColor }) => bgColor};
  padding: 1em 1.25em;
  display: flex;

  & > * {
    flex-basis: 100%;
    min-width: 30%;
  }

  span {
    font-size: 12px;
  }

  h1 {
    font-size: 55px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    line-height: 1;
  }

  button {
    font-size: 14px;
  }

  /* Mobile XS - Landscape */
  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    padding: 0em 1.25em;
  }

  /* Tablet - Portrait */
  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    padding: 0em 2em;

    span {
      font-size: 16px;
    }

    h1 {
      font-size: 80px;
    }

    button {
      font-size: 16px;
    }
  }

  /* Tablet - Landscape */
  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    padding: 0 3em;
  }
`

export const LockIcon = styled.img`
  /* Mobile XS - Portrait */
  height: 28px;
  width: 28px;
  /* Tablet - Portrait */
  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    height: 40px;
    width: 40px;
  }
`
