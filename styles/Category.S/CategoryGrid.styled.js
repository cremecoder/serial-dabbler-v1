import styled from "styled-components"

const SectionGrid = styled.div`
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

  hr {
    align-self: end;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  span {
    place-self: center end;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

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

    hr {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    span {
      place-self: center end;
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }
  }

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

    hr {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      margin-bottom: 0.25em;
    }

    span {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    p {
      margin-top: 3em;
      place-self: start center;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    h1 {
      grid-column: 1 / 4;
      grid-row: 2 / 3;
    }

    hr {
      grid-column: 1 / 4;
      grid-row: 2 / 3;
      margin: 0 auto 10vh;
      min-width: 80%;
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
