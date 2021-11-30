import styled from "styled-components"

export const StyledSlide = styled.div`
  overflow: scroll;
  position: absolute;
  inset: 0 0 0 0;
  padding: 0 1em;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  transform: ${({ slideState }) =>
    slideState === "entering" || slideState === "entered"
      ? "translate(0, 0)"
      : "translate(0, -100%)"};
  transition: transform 400ms ease;

  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    padding: 0.25em 2em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    padding: 0.25em 3em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    padding: 1em 0;
  }
`

export const StyledBlockText = styled.div`
  border: 1px solid white;

  h1 {
    letter-spacing: 0.5px;
    line-height: 1;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
  }
`

export const StyledParaText = styled.div`
  border: 1px solid white;

  p {
    color: white;
  }

  h2 {
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
  }
`
