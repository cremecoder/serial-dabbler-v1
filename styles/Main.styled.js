import styled from "styled-components"

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  & > section {
    border: 2px solid white;
    flex-grow: 1;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet}) {
    flex-direction: row;
  }
`

export default Main
