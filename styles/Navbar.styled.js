import styled from "styled-components"

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`

export default StyledNav
