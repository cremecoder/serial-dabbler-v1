import styled from "styled-components"

export const StyledCategory = styled.section`
  background-color: ${({ theme }) => theme.colors.one};
  padding: 0.5em 1.5em;

  span {
    font-size: 12px;
  }

  h1 {
    font-size: 55px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet}) {
    padding: 1em 3em;

    span {
      font-size: 16px;
    }

    h1 {
      font-size: 80px;
    }
  }
`

export const LockIcon = styled.img`
  height: 28px;
  width: 28px;

  @media (min-width: ${({ theme }) => theme.breaks.tablet}) {
    height: 40px;
    width: 40px;
  }
`

export const GridCategory = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, 1fr);

  /* & > * {
    border: 2px solid black;
  } */

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
`
