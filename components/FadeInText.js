import { memo } from "react"
import Fade from "react-reveal/Fade"

const FadeInText = ({ name, index }) => {
  return (
    <Fade left duration={1000} delay={index * 100} distance="30px">
      <h1>{name}</h1>
    </Fade>
  )
}

export default memo(FadeInText)
