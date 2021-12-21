import { useState, useEffect, memo } from "react"
import Fade from "react-reveal/Fade"
// import styled, { keyframes } from "styled-components"

// const fade = keyframes`
//     from {
//       opacity: 0;
//       transform: translateX(-50px);
//     }
//     to {
//       opacity: 1;
//       transform: none;
//     }
// `

// const StyledFade = styled.h1`
//   visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
//   animation: ${fade} 1000ms ease;
//   animation-delay: ${({ fadeDelay }) => fadeDelay + "ms"};
// `

const Fader = ({ name, index }) => {
  // const [isVisible, setIsVisible] = useState(false)
  // const fadeDelay = index * 100

  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setIsVisible(true)
  //   }, fadeDelay)
  //   return () => clearTimeout(timeout)
  // }, [])

  console.log("Fade")

  return (
    // <StyledFade fadeDelay={fadeDelay} isVisible={isVisible}>
    //   <>{name}</>
    // </StyledFade>
    <Fade left duration={1000} delay={index * 100} distance="30px">
      <h1>{name}</h1>
    </Fade>
  )
}

export default memo(Fader)
// left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px"
