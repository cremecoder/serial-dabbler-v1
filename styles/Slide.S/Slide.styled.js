import styled from "styled-components"

const StyledSlide = styled.div`
  overflow: scroll;
  position: absolute;
  inset: 0 0 0 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ state }) =>
    state === "entering" || state === "entered" || state === "exiting"
      ? "1"
      : "0"};
  transform: ${({ state }) =>
    state === "entering" || state === "entered" || state === "exiting"
      ? "translate(0, 0)"
      : "translate(0, -100%)"};
  transition: opacity 400ms ease, transform 400ms ease;

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    padding: 1em;
    transform: ${({ state }) =>
      state === "entering" || state === "entered" || state === "exiting"
        ? "translate(0, 0)"
        : "translate(-100%, 0)"};
  }
`

export default StyledSlide
