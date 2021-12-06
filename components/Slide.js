import { useContext } from "react"
import { useTheme } from "styled-components"
import { LayoutStateContext, SetLayoutStateContext } from "../components/Layout"

import StyledSlide from "../styles/Slide.S/Slide.styled"
import {
  SlideGridUpper,
  StyledBlockText,
  StyledParaText,
  SocialDiv
} from "../styles/Slide.S/SlideGridUpper.styled"
import {
  SlideGridLower,
  FormText,
  Form,
  Copy
} from "../styles/Slide.S/SlideGridLower.styled"
import {
  DabbleButton,
  CloseButton
} from "../styles/CallToAction.S/Buttons.styled"
import { InstaIcon } from "../styles/CallToAction.S/Icons.styled"

const Slide = ({ slideState }) => {
  const theme = useTheme()
  const { isOverlayOpen } = useContext(LayoutStateContext)
  const { handleOverlayToggle } = useContext(SetLayoutStateContext)

  console.log("Slide")
  return (
    <StyledSlide slideState={slideState}>
      {/* {isOverlayOpen ? (
        <CloseButton onClick={() => handleOverlayToggle()} />
      ) : (
        ""
      )} */}
      <SlideGridUpper>
        <StyledBlockText>
          <h1>DABBLE IN NEW THINGS</h1>
          <h1>DABBLE IN OLD SKILLS</h1>
          <h1>DABBLE WITH FRESH IDEAS OR</h1>
          <h1>SWIPE THE DUST OFF OLD ONES</h1>
          <h1>DABBLE EVERYDAY</h1>
          <h1>OR DABBLE EVERY WEEK</h1>
          <h1>DABBLE TILL THE SUN COMES UP</h1>
          <h1>OR DABBLE FOR A BIT.</h1>
        </StyledBlockText>
        <StyledParaText>
          <p>
            Too many choices, too many ideas, not enough ideas what tools, what
            style, where to start, what to do... Too many decisions to be made
            tends to turn into Meh, cant be bothered now.
          </p>
          <p>
            Serial Dabbler is here to give you a jump-off point - something to
            challenge you, to get you excited, something to latch onto get the
            momentum that you need to get started and get going.
          </p>
          <p>
            If you make something tha youre chuffed with, tag it and weel
            re-share it so we can all be chuffed together.
          </p>
        </StyledParaText>
        <SocialDiv>
          <InstaIcon />
          <h2>#SERIALDABBLER</h2>
        </SocialDiv>
      </SlideGridUpper>
      <hr />
      <SlideGridLower>
        <FormText>
          <h2>DROP US A MESSAGE</h2>
          <p>
            If you have any questions or feedback, or just want to say hi,
            please drop us a message - we&apos;d love to hear from you.
          </p>
        </FormText>
        <Form>
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Message</label>
          <textarea rows="5" cols="33"></textarea>
          <DabbleButton
            clrPrimary={theme.colors.white}
            clrSecondary={theme.colors.black}
            width={"50%"}
          >
            SUBMIT
          </DabbleButton>
        </Form>
        <Copy>
          <span>Code by Sean Martin</span>
          <span>Design by Tim Tim</span>
        </Copy>
      </SlideGridLower>
    </StyledSlide>
  )
}

export default Slide
