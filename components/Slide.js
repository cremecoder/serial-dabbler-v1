import Image from "next/image"
import { useRef, memo } from "react"
import { useTheme } from "styled-components"
import { Transition } from "react-transition-group"

import Form from "../components/Form"

import StyledSlide from "../styles/Slide.S/Slide.styled"
import {
  SlideGrid,
  CloseButton,
  StyledBlockText,
  StyledParaText,
  StyledInstacon,
  HashBlock,
  Rule,
  FormText,
  Copy
} from "../styles/Slide.S/SlideGrid.styled"
import Instacon from "./Instacon"

const Slide = ({ isOverlayOpen, handleOverlayToggle }) => {
  const theme = useTheme()
  const slideRef = useRef(null)

  return (
    <Transition
      in={isOverlayOpen}
      timeout={theme.durations.slide}
      slideRef={slideRef}
    >
      {state => (
        <StyledSlide state={state}>
          <CloseButton onClick={() => handleOverlayToggle()}>
            <Image
              src={`/images/close.svg`}
              alt={"close"}
              width={16}
              height={16}
            />
          </CloseButton>
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
                Too many choices, too many ideas, not enough ideas, what tools,
                what style, where to start, what to do. Having to make all these
                decisions sometimes turns into <q>Meh, not today</q>.
              </p>
              <p>
                Serial Dabbler is here to give you a jumping off point to help
                you get started and get going in all things creative.
              </p>
              <p>
                If you make something that you&apos;re chuffed with, tag it and
                we&apos;ll reshare it so we can all be chuffed together.
              </p>
            </StyledParaText>
            <StyledInstacon>
              <Instacon />
            </StyledInstacon>
            <HashBlock>
              <h2>#SERIALDABBLER</h2>
            </HashBlock>
            <Rule />
            <FormText>
              <h1>DROP US A MESSAGE</h1>
              <p>
                If you have any questions or feedback, or just want to say hi,
                please drop us a message - we&apos;d love to hear from you.
              </p>
            </FormText>
            <Form />
            <Copy>
              <span>
                Code by{" "}
                <a
                  href="https://www.linkedin.com/in/sean-martin-cremecoder"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sean Martin
                </a>
              </span>
              <span>
                Design by{" "}
                <a
                  href="https://www.instagram.com/tim.tim.tim.tim/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tim Tim
                </a>
              </span>
            </Copy>
          </SlideGrid>
        </StyledSlide>
      )}
    </Transition>
  )
}

export default memo(Slide)
