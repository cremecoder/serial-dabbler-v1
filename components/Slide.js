import { useContext } from "react"
import { LayoutContext } from "../components/Layout"

import Form from "../components/Form"

import StyledSlide from "../styles/Slide.S/Slide.styled"
import {
  SlideGrid,
  StyledBlockText,
  StyledParaText,
  SocialDiv,
  Rule,
  FormText,
  Copy
} from "../styles/Slide.S/SlideGrid.styled"
import { CloseButton } from "../styles/CallToAction.S/Buttons.styled"
import { InstaIcon } from "../styles/CallToAction.S/Icons.styled"

const Slide = ({ slideState }) => {
  const { isOverlayOpen, handleOverlayToggle } = useContext(LayoutContext)

  return (
    <StyledSlide slideState={slideState}>
      {/* {isOverlayOpen ? (
        <CloseButton onClick={() => handleOverlayToggle()} />
      ) : (
        ""
      )} */}
      <SlideGrid>
        <StyledBlockText>
          <h1>
            DABBLE IN NEW THINGS
            <br />
            DABBLE IN OLD SKILLS
            <br />
            DABBLE WITH FRESH IDEAS OR
            <br />
            DABBLE WITH PAST FLINGS
            <br />
            DABBLE EVERY DAY OR
            <br />
            DABBLE EVERY WEEK
            <br />
            DABBLE TILL THE SUN COMES UP OR
            <br />
            DABBLE FOR A BIT.
          </h1>
        </StyledBlockText>
        <StyledParaText>
          <p>
            Too many choices, too many ideas, not enough ideas, what tools, what
            style, where to start, what to do. This big list of decisions tends
            to turn into <q>Meh, not today</q>.
          </p>
          <p>
            Serial Dabbler is here to give you a jump-off point - something to
            challenge you, to get you excited, something you can latch onto to
            get the momentum that you need to get started and get going.
          </p>
          <p>
            If you make something that you&apos;re chuffed with, tag it and
            we&apos;ll re-share it so we can all be chuffed together.
          </p>
        </StyledParaText>
        <SocialDiv>
          <InstaIcon />
          <h2>#SERIALDABBLER</h2>
        </SocialDiv>
        <Rule />
        <FormText>
          <h2>DROP US A MESSAGE</h2>
          <p>
            If you have any questions or feedback, or just want to say hi,
            please drop us a message - we&apos;d love to hear from you.
          </p>
        </FormText>
        <Form />
        <Copy>
          <span>Code by Sean Martin</span>
          <span>Design by Tim Tim</span>
        </Copy>
      </SlideGrid>
    </StyledSlide>
  )
}

export default Slide
