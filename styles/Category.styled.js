import styled from "styled-components"

export const StyledCategory = styled.section`
  /* Mobile XS - Portrait */
  background-color: ${({ theme }) => theme.colors.one};
  padding: 1em;
  display: flex;

  & > * {
    flex-basis: 100%;
  }

  span {
    font-size: 12px;
  }

  h1 {
    font-size: 55px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }

  /* Mobile XS - Landscape */
  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    padding: 0.25em 1em;
  }

  /* Tablet - Portrait */
  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    padding: 2.5em;

    span {
      font-size: 16px;
    }

    h1 {
      font-size: 80px;
    }
  }
`

export const LockIcon = styled.img`
  /* Mobile XS - Portrait */
  height: 28px;
  width: 28px;
  /* Tablet - Portrait */
  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    height: 40px;
    width: 40px;
  }
`
// ======================================================================

export const GridCategory = styled.div`
  /* Mobile XS - Portrait */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, 1fr);

  span {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  h1 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  img {
    place-self: center end;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  /* Mobile XS - Landscape */
  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-template-columns: repeat(3, 1fr);

    span {
      place-self: center start;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    h1 {
      width: 100%;
      text-align: center;
      place-self: center;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    img {
      place-self: center end;
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }
  }

  /* Mobile SM - Landscape */
  @media (min-width: ${({ theme }) => theme.breaks.mobile_sm.landscape}) {
    span {
      grid-row: 2 / 3;
    }

    h1 {
      grid-row: 2 / 3;
    }

    img {
      grid-row: 2 / 3;
    }
  }

  /* Tablet - Portrait */
  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    grid-template-columns: 2fr 1fr;

    span {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    h1 {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }

    img {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }
  }
`
