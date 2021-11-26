import styled from "styled-components"

const Slide = styled.div`
  overflow: scroll;
  padding: 0.25em 1.25em;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 1.25em;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  transform: ${({ state, width }) =>
    state === "entering" || state === "entered"
      ? "translate(0, 0)"
      : width >= 1366
      ? "translate(-100%, 0)"
      : "translate(0, -100%)"};
  transition: transform 400ms ease;

  h1 {
    letter-spacing: 0.5px;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
  }
`

export default Slide
