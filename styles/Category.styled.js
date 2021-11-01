import styled from "styled-components"

export const StyledCategory = styled.section`
  background-color: ${({ theme }) => theme.colors.categoryOne};

  h1 {
    font-size: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    padding-bottom: 1rem;
    padding-right: 10rem;
  }
`
