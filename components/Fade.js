import { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"

const fade = keyframes`
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
`

const StyledFade = styled.h1`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  animation: ${fade} 1000ms ease;
  animation-delay: ${({ fadeDelay }) => fadeDelay + "ms"};
`

const Fade = ({ name, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const fadeDelay = index * 400

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsVisible(true)
    }, fadeDelay)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledFade fadeDelay={fadeDelay} isVisible={isVisible}>
      <>{name}</>
    </StyledFade>
  )
}

export default Fade
