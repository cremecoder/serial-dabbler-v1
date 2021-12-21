import styled from "styled-components"

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    flex-direction: row;
  }
`

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Wrapper
