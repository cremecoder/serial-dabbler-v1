import styled from "styled-components"

const StyledCategory = styled.section`
  background-color: ${({ bgColor }) => bgColor};
  padding: 1em 1.25em;
  display: flex;

  & > * {
    flex-basis: 100%;
  }

  p {
    font-size: 12px;
  }

  h1 {
    font-size: 55px;
    line-height: 1;
  }

  hr {
    border: 1px solid black;
  }

  span {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    padding: 0em 1.25em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    padding: 0em 2em;

    p {
      font-size: 16px;
    }

    h1 {
      font-size: 80px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    padding: 0 3em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    padding: 0 3em;
  }
`

export default StyledCategory
