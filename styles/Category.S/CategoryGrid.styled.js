import styled from "styled-components"

const SectionGrid = styled.div`
  /* Mobile XS - Portrait */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, 1fr);

  p {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  h1 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  span {
    place-self: center end;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  /* Mobile XS - Landscape */
  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-template-columns: repeat(3, 1fr);

    p {
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

    span {
      place-self: center end;
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }
  }

  /* Mobile SM - Landscape */
  @media (min-width: ${({ theme }) => theme.breaks.mobile_sm.landscape.sm}) {
    p {
      grid-row: 2 / 3;
    }

    h1 {
      grid-row: 2 / 3;
    }

    span {
      grid-row: 2 / 3;
    }
  }

  /* Tablet - Portrait */
  /* @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(3, 1fr);

    p {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    h1 {
      text-align: left;
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    span {
      place-self: center end;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
  } */

  /* Tablet - Landscape */
  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    grid-template-columns: repeat(3, 1fr);

    p {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    h1 {
      text-align: center;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    span {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }
  }

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    p {
      place-self: center;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    h1 {
      grid-column: 1 / 4;
      grid-row: 2 / 3;
    }

    span {
      place-self: start center;
      grid-column: 2 / 3;
      grid-row: 3 / 4;
    }

    button {
      place-self: center;
      grid-column: 1 / 4;
      grid-row: 3 / 4;
    }
  }
`
export default SectionGrid
