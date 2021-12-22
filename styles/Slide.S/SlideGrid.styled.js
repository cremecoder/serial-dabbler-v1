import styled from "styled-components"

export const SlideGrid = styled.div`
  max-width: ${({ theme }) => theme.breaks.desktop};
  margin: 0 auto;
  padding: 1em;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(4, 1fr);

  h1,
  h2 {
    letter-spacing: 0.5px;
    line-height: 1;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
  }

  p {
    letter-spacing: 0.5px;
    line-height: 1.5;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    padding: 2em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    padding: 3em;
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    padding: 4em 12em 4em 4em;
  }
`
// ====================================================================
export const CloseButton = styled.span`
  cursor: pointer;
  display: none;

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    display: initial;
    position: absolute;
    top: 3%;
    right: 3%;
    padding: 0.5em;
    /* grid-column: 5 / 6;
    grid-row: 1 / 2;
    place-self: end;
    padding-bottom: 10%; */
  }
`
// ====================================================================
export const StyledBlockText = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 2;

  h1 {
    font-size: 1.75em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-column: 1 / 5;
    grid-row: 1 / 2;

    h1 {
      font-size: 3em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    grid-column: 1 / 4;
    grid-row: 1 / 3;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    grid-column: 1 / 4;
    grid-row: 2 / 4;
  }
`
// ====================================================================
export const StyledParaText = styled.div`
  grid-column: 1 / 5;
  grid-row: 2 / 3;

  p {
    font-size: 0.9em;
    margin-bottom: 1em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    width: 95%;

    p {
      font-size: 1em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    width: 100%;

    p {
      font-size: 1.1em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    grid-column: 4 / 6;
    grid-row: 2 / 3;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding-top: 1.25em;
    padding-left: 0.3em;
  }
`
// ====================================================================
export const SocialDiv = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  display: flex;
  align-items: end;

  @media (min-width: ${({ theme }) => theme.breaks.mobile_sm.portrait}) {
    grid-column: 1 / 4;
    grid-row: 3 / 4;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
    margin-top: 0;
    place-self: end;

    h2 {
      font-size: 1.75em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    grid-column: 5 / 6;
    grid-row: 2 / 3;
    place-self: start;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    grid-column: 5 / 6;
    grid-row: 3 / 4;
    place-self: end;
  }
`
// ====================================================================
export const Rule = styled.hr`
  grid-column: 1 / 5;
  grid-row: 4 / 5;
  margin: 0.5em 0;

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    grid-column: 1 / 6;
    grid-row: 4 / 5;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    grid-column: 1 / 6;
    grid-row: 5 / 6;
  }
`
// ====================================================================
export const FormText = styled.div`
  grid-column: 1 / 5;
  grid-row: 5 / 6;

  h2 {
    padding-bottom: 0.5em;
  }

  p {
    font-size: 0.9em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-column: 1 / 3;
    grid-row: 5 / 6;
    width: 95%;

    p {
      font-size: 1em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    p {
      font-size: 1.1em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    grid-column: 1 / 3;
    grid-row: 6 / 7;
  }
`
// ====================================================================
export const StyledForm = styled.form`
  grid-column: 1 / 5;
  grid-row: 6 / 7;

  label {
    padding: 1em 0 0.5em 0;
  }

  input,
  textarea {
    padding: 0.5em;
    letter-spacing: 0.5px;
    font-size: 1em;
    line-height: 1.5;
    outline: none;
    border: 1px solid ${({ clrSecondary }) => clrSecondary};
    background-color: transparent;
    color: ${({ clrSecondary }) => clrSecondary};
    transition: border-color 200ms, box-shadow 200ms, background-color 200ms,
      color 200ms;

    :focus {
      border-color: ${({ clrSecondary }) => clrSecondary};
      box-shadow: 0 0 10px ${({ clrSecondary }) => clrSecondary};
      background-color: ${({ clrSecondary }) => clrSecondary};
      color: ${({ clrPrimary }) => clrPrimary};
    }
  }

  button {
    margin: 2em 0 3em 0;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-column: 3 / 6;
    grid-row: 5 / 6;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    grid-column: 4 / 6;
    grid-row: 5 / 6;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    grid-column: 4 / 6;
    grid-row: 6 / 7;
  }
`
// ====================================================================
export const Copy = styled.div`
  display: flex;
  grid-column: 1 / 5;
  grid-row: 7 / 8;

  span {
    font-size: 12px;
  }

  span:first-of-type {
    padding-right: 1em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    flex-direction: column;
    grid-column: 1 / 3;
    grid-row: 5 / 6;
    place-self: center start;
    margin-bottom: 25%;

    span:first-of-type {
      padding: 0.5em 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    grid-column: 1 / 3;
    grid-row: 6 / 7;
  }
`
