import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;

  section {
    border: 2px solid black;
    flex-grow: 1;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    flex-direction: row;
  }
`

export default Main
