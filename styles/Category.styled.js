import styled from "styled-components"

export const StyledCategory = styled.section`
  /* Mobile XS - Portrait */
  background-color: ${({ bgColor }) => bgColor};
  padding: 1em 1.25em;
  display: flex;

  & > * {
    flex-basis: 100%;
  }

  span {
    font-size: 12px;
    opacity: 0;
    transform: translateX(-50%);
    opacity: ${({ state }) =>
      state === "entering" || (state === "entered" && "1")};
    transform: ${({ state }) =>
      state === "entering" || (state === "entered" && "translateX(0)")};
    transition: transform 400ms ease-out, opacity 250ms ease-out;
  }

  h1 {
    font-size: 55px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    line-height: 1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ bgColor }) => bgColor};
    opacity: 0;
    transform: translateX(-50%);
    opacity: ${({ state }) =>
      state === "entering" || (state === "entered" && "1")};
    transform: ${({ state }) =>
      state === "entering" || (state === "entered" && "translateX(0)")};
    transition: transform 400ms ease-out, opacity 250ms ease-out;
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
  }

  /* Tablet - Landscape */
  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    padding: 0 3em;
  }

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    padding: 0 3em;

    h1 {
      -webkit-text-stroke-width: 0px;
      -webkit-text-stroke-color: none;
    }
  }
`

export const LockIcon = styled.img`
  /* Mobile XS - Portrait */
  height: 28px;
  width: 28px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 300ms ease;

  /* Tablet - Portrait */
  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    height: 40px;
    width: 40px;
  }
`
