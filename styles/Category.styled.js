import styled from "styled-components"

export const StyledCategory = styled.section`
  background-color: ${({ theme }) => theme.colors.one};

  h1 {
    font-size: 55px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }
`
