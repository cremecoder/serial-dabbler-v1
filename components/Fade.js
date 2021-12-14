import { useState, useEffect } from "react"
import styled from "styled-components"
import { Transition } from "react-transition-group"

const Fade = ({ name, trigger }) => {
  const [animate, setAnimate] = useState(false)
  const [temp, setTemp] = useState(false)

  useEffect(() => {
    setAnimate(true)
    setTemp(true)
  }, [trigger])

  // if transition ran...
  // if temp = true the button pressed
  // ? animate = false
  // & temp = false

  // console.log("Fade: " + trigger)
  return (
    <Transition in={animate} timeout={300}>
      {state => <StyledFade state={state}>{name}</StyledFade>}
    </Transition>
  )
}

export default Fade

const StyledFade = styled.h1`
  opacity: ${({ state }) =>
    state === "entering" || state === "entering" ? 0 : 1};
  transform: ${({ state }) =>
    state === "entering" || state === "entering"
      ? "translate(0, -100%)"
      : "translate(0, 0)"};
  transition: all 300ms ease;
`
