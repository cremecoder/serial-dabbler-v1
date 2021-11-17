import { useState } from "react"

import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const StyledSlide = styled.div`
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
  /* transform: ${props =>
    props.width >= 1366 ? "translate(-100%, 0)" : "translate(0, -100%)"};
  transition: transform 300ms ease; */

  .slide-enter {
    transform: ${props =>
      props.width >= 1366 ? "translate(-100%, 0)" : "translate(0, -100%)"};
  }

  .slide-enter-active {
    transform: translate(0, 0);
    transition: transform 300ms ease;
  }

  .slide-exit {
    transform: translate(0, 0);
  }

  .slide-exit-active {
    transform: ${props =>
      props.width >= 1366 ? "translate(-100%, 0)" : "translate(0, -100%)"};
    transition: transform 300ms ease;
  }

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

  /* :hover div {
    transform: translate(0, 0);
  } */
`

const Slide = ({ children, width }) => {
  const [toggle, setToggle] = useState(true)

  return (
    <TransitionGroup component={StyledSlide} width={width}>
      <CSSTransition in={toggle} timeout={300} classNames="slide">
        <StyledSlide width={width}>{children}</StyledSlide>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Slide
