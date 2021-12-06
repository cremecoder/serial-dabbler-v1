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
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    line-height: 1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ bgColor }) => bgColor};
    opacity: ${({ aniState }) =>
      aniState === "entering" || aniState === "entering" ? 0 : 1};
    transition: all 300ms ease;
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

    h1 {
      -webkit-text-stroke-width: 0px;
      -webkit-text-stroke-color: none;
    }
  }
`

export default StyledCategory
