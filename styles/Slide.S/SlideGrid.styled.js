import styled from "styled-components"

export const SlideGrid = styled.div`
  padding-top: 1em;
  display: grid;
  grid-gap: 1em;
  /* grid-auto-columns: 1fr; */
  grid-template-columns: repeat(3, 1fr);

  & > * {
    border: 1px solid red;
  }
`
// ====================================================================
export const StyledBlockText = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
`
// ====================================================================
export const StyledParaText = styled.div`
  grid-column: 1 / 4;
  grid-row: 2 / 3;

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`
// ====================================================================
export const SocialDiv = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    place-self: end;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    place-self: start;
  }
`
// ====================================================================
export const Rule = styled.hr`
  padding: 0;
  margin: 1em;
`
// ====================================================================
export const FormText = styled.div`
  h1 {
    padding-bottom: 0.5em;
  }
`
// ====================================================================
export const Copy = styled.div``
