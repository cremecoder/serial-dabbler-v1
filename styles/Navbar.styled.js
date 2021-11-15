import styled from "styled-components"

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.25em 1.25em;

  .slide-content {
    padding: 0.25em 1.25em;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 1.25em;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    transform: ${props =>
      props.width >= 1366 ? "translate(-100%, 0)" : "translate(0, -100%)"};
    transition: transform 0.3s ease;
  }

  :hover .slide-content {
    transform: translate(0, 0);
  }

  h1 {
    font-size: 24px;
    line-height: 1;
  }

  button {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    padding: 0.25em 2em;

    h1 {
      font-size: 34px;
    }

    button {
      font-size: 16px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    padding: 0.25em 3em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    padding: 1em 2em;
  }
`

export const FlexNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    flex-direction: column;
    height: 100%;
  }
`
