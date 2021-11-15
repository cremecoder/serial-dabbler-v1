import styled from "styled-components"

const Main = styled.main`
  position: relative;
  /* height: 80vh; */
  overflow: hidden;
  display: flex;
  flex-direction: column;

  section {
    flex-grow: 1;
    overflow: hidden;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    flex-direction: row;
  }
`

export default Main
