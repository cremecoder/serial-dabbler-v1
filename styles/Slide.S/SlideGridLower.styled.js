import styled from "styled-components"

export const SlideGridLower = styled.div`
  padding: 1em;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: ${({ theme }) => theme.breaks.tablet.portrait}) {
    padding: 2em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    grid-template-columns: repeat(5, 1fr);
    padding: 3em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    padding: 4em 0;
    margin: 0 auto;
    max-width: 75%;
  }
`

export const FormText = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 2;

  h2 {
    padding-bottom: 0.5em;
  }

  p {
    font-size: 0.9em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;

    p {
      font-size: 1em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    p {
      font-size: 1.1em;
    }
  }
`

export const StyledForm = styled.form`
  grid-column: 1 / 5;
  grid-row: 2 / 3;

  label {
    padding: 1em 0 0.5em 0;
  }

  input,
  textarea {
    padding: 0.5em;
    letter-spacing: 0.5px;
    font-size: 1em;
    line-height: 1.5;
    outline: none;
    border: 1px solid ${({ clrSecondary }) => clrSecondary};
    background-color: transparent;
    color: ${({ clrSecondary }) => clrSecondary};
    transition: border-color 200ms, box-shadow 200ms, background-color 200ms,
      color 200ms;

    :focus {
      border-color: ${({ clrSecondary }) => clrSecondary};
      box-shadow: 0 0 10px ${({ clrSecondary }) => clrSecondary};
      background-color: ${({ clrSecondary }) => clrSecondary};
      color: ${({ clrPrimary }) => clrPrimary};
    }
  }

  button {
    margin: 2em 0 3em 0;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    grid-column: 3 / 6;
    grid-row: 1 / 4;
  }

  @media (min-width: ${({ theme }) => theme.breaks.tablet.landscape}) {
    grid-column: 4 / 6;
    grid-row: 1 / 4;
  }
`

export const Copy = styled.div`
  display: flex;
  grid-column: 1 / 5;
  grid-row: 3 / 4;

  span {
    font-size: 12px;
  }

  span:first-of-type {
    padding-right: 1em;
  }

  @media (min-width: ${({ theme }) => theme.breaks.mobile_xs.landscape}) {
    flex-direction: column;
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    span:first-of-type {
      padding: 0.75em 0;
    }
  }
`
