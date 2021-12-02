import styled from "styled-components"

export const StyledSlide = styled.div`
  overflow: scroll;
  position: absolute;
  inset: 0 0 0 0;
  z-index: 10;
  padding: 0 1em;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ slideState }) =>
    slideState === "entering" ||
    slideState === "entered" ||
    slideState === "exiting"
      ? "1"
      : "0"};
  transform: ${({ slideState }) =>
    slideState === "entering" ||
    slideState === "entered" ||
    slideState === "exiting"
      ? "translate(0, 0)"
      : "translate(0, -100%)"};
  transition: opacity 400ms ease, transform 400ms ease;

  /* svg:first-child {
    display: none;
  } */

  h1,
  h2 {
    letter-spacing: 0.5px;
    line-height: 1;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
  }

  p {
    letter-spacing: 0.5px;
    font-size: 1rem;
    line-height: 1.5;
  }

  hr {
    margin: 1em 0;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    padding: 0.25em 2em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    padding: 0.25em 3em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    padding: 1em 0;

    transform: ${({ slideState }) =>
      slideState === "entering" ||
      slideState === "entered" ||
      slideState === "exiting"
        ? "translate(0, 0)"
        : "translate(-100%, 0)"};

    /* svg:first-child {
      display: initial;
    } */
  }
`

export const FlexSlide = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const FlexSlideInner = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const CloseButton = styled.button`
  display: none;
  background: transparent;
  color: ${props => props.clrPrimary};
  outline: none;
  border: none;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    display: initial;
  }
`

export const StyledBlockText = styled.div`
  padding: 1em 0;
`

export const StyledParaText = styled.div`
  padding: 1em 0;

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    width: 60%;
  }
`
export const SocialDiv = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5em;

  svg {
    margin-right: 0.5em;
  }
`

export const FormText = styled.div`
  padding: 1em 0;
  h1 {
    padding-bottom: 0.5em;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    padding: 1em 0 0.5em 0;
  }

  input,
  textarea {
    padding: 0.25em;
    letter-spacing: 0.5px;
    font-size: 1.5em;
    line-height: 1.5;
    outline: none;
    border: none;
  }

  button {
    margin: 2em 0 3em 0;
  }
`
