import styled from "styled-components"

export const StyledCategory = styled.section`
  background-color: ${({ theme }) => theme.colors.one};

  span {
    font-size: 12px;
  }

  h1 {
    font-size: 55px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }

  p {
    font-size: 28px;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet}) {
    span {
      font-size: 16px;
    }

    h1 {
      font-size: 80px;
    }

    p {
      font-size: 40px;
    }
  }
`
