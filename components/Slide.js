import { useContext } from "react"
import { useTheme } from "styled-components"

import { LayoutContext } from "../components/Layout"

import { OverlayButton } from "../styles/Buttons.styled"

const Slide = () => {
  const theme = useTheme()
  const {
    size: { width },
    isOverlayOpen,
    setIsOverlayOpen
  } = useContext(LayoutContext)

  return (
    <>
      {isOverlayOpen && width >= 1366 ? (
        <OverlayButton
          onClick={() => setIsOverlayOpen(!isOverlayOpen)}
          clrPrimary={theme.colors.white}
        >
          <span>X</span>
        </OverlayButton>
      ) : (
        ""
      )}
      <h1>DABBLE IN NEW THINGS</h1>
      <h1>DABBLE IN OLD SKILLS</h1>
      <h1>DABBLE WITH FRESH IDEAS OR</h1>
      <h1>SWIPE THE DUST OFF OLD ONES</h1>
      <h1>DABBLE EVERYDAY</h1>
      <h1>OR DABBLE EVERY WEEK</h1>
      <h1>DABBLE TILL THE SUN COMES UP</h1>
      <h1>OR DABBLE FOR A BIT.</h1>
      <p>
        Too many choices, too many ideas, not enough ideas what tools, what
        style, where to start, what to do... Too many decisions to be made tends
        to turn into Meh, cant be bothered now.
      </p>
      <p>
        Serial Dabbler is here to give you a jump-off point - something to
        challenge you, to get you excited, something to latch onto get the
        momentum that you need to get started and get going.
      </p>
      <p>
        If you make something tha youre chuffed with, tag it and weel re-share
        it so we can all be chuffed together.
      </p>
    </>
  )
}

export default Slide
