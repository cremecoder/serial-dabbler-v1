import styled from "styled-components"

const Slide = styled.div`
  overflow: scroll;
  position: absolute;
  inset: 0 0 0 0;
  padding: 0 1em;
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
    line-height: 1;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;

    /* :first-of-type {
      padding-top: 0.5em;
    } */
  }
`

export default Slide
