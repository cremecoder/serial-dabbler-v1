import styled from "styled-components"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    flex-direction: row;
  }
`

export default Wrapper
