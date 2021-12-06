import styled from "styled-components"

export const SlideGridUpper = styled.div`
  padding: 1em;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    padding: 2em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    padding: 3em;
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    padding: 4em 0;
    margin: 0 auto;
    max-width: 75%;
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

    h1 {
      font-size: 3.5em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    grid-column: 1 / 4;
    grid-row: 1 / 3;
  }
`
// ====================================================================
export const StyledParaText = styled.div`
  grid-column: 1 / 5;
  grid-row: 2 / 3;

  p {
    font-size: 0.9em;
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
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    padding-top: 1.75em;
  }
`
// ====================================================================
export const SocialDiv = styled.div`
  grid-column: 1 / 5;
  grid-row: 3 / 4;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
    margin-top: 0;
    place-self: end;

    h2 {
      font-size: 1.75em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    place-self: start;
  }
`
