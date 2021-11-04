import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }
`

export const Container = styled.div`
  padding: 0.5em 1.5em;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  min-height: ${({ align }) => align || "auto"};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, 1fr);

  /* & > * {
    border: 2px solid white;
  } */

  span {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  h1 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  p {
    place-self: center end;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`
