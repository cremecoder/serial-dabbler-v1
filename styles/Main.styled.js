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

  & > button {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    flex-direction: row;

    section {
      flex-basis: 100%;
    }
  }
`

export default Main
