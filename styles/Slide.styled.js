import styled from "styled-components"

const Slide = styled.div`
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
  transform: ${props =>
    props.width >= 1366 ? "translate(-100%, 0)" : "translate(0, -100%)"};
  transition: transform 0.3s ease;

  /* .slide-top .slide-content {
    transform: translate(0, -100%);
  }

  .slide-left .slide-content {
    transform: translate(100%, 0);
  }

  .slide-bottom .slide-content {
    transform: translate(0, 100%);
  }

  .slide-right .slide-content {
    transform: translate(-100%, 0);
  }  */
`

export default Slide
