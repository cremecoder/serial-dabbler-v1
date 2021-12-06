import styled from "styled-components"

const StyledSlide = styled.div`
  overflow: scroll;
  position: absolute;
  inset: 0 0 0 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ slideState }) =>
    slideState === "entering" ||
    slideState === "entered" ||
    slideState === "exiting"
      ? "1"
      : "0"};
  transform: ${({ slideState }) =>
    slideState === "entering" ||
    slideState === "entered" ||
    slideState === "exiting"
      ? "translate(0, 0)"
      : "translate(0, -100%)"};
  transition: opacity 400ms ease, transform 400ms ease;

  h1,
  h2 {
    letter-spacing: 0.5px;
    line-height: 1;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
  }

  p {
    letter-spacing: 0.5px;
    line-height: 1.5;
  }

  hr {
    padding: 0;
    margin: 0.5em 1em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    padding: 1em;
    transform: ${({ slideState }) =>
      slideState === "entering" ||
      slideState === "entered" ||
      slideState === "exiting"
        ? "translate(0, 0)"
        : "translate(-100%, 0)"};
  }
`

export default StyledSlide
