import styled from "styled-components"

const Slide = styled.div`
  /* display: ${({ state }) =>
    state === "entering" || state === "entered" ? "block" : "none"}; */
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
  transition: transform 300ms ease;
`

export default Slide
