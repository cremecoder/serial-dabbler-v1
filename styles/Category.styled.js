import styled from "styled-components"

const StyledCategory = styled.section`
  background-color: ${({ theme }) => theme.colors.one};

  div > span {
    padding: 1rem 0;
  }

  h1 {
    font-size: 55px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    padding: 1rem 0;
    padding-right: 10rem;
  }
`

export default StyledCategory
