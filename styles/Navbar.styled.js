import styled from "styled-components"

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Logo = styled.img`
  width: 20rem;
  height: 5rem;
  background-color: red;
`
