import { memo } from "react"
import styled from "styled-components"

const StyledDabbleButton = styled.button`
  letter-spacing: 1px;
  background: transparent;
  width: ${({ width }) => width || "auto"};
  color: ${props => props.clrPrimary};
  outline: none;
  border: 2px solid ${props => props.clrPrimary};
  padding: 1em 2em;
  cursor: pointer;
  transition: 300ms color, 300ms border, 300ms background-color;

  &:hover {
    color: ${props => props.clrSecondary};
    border: 2px solid ${props => props.clrSecondary};
    background-color: ${props => props.clrPrimary};
  }
`

const DabbleButton = ({
  text,
  clrPrimary,
  clrSecondary,
  width,
  handleDabble
}) => {
  return (
    <StyledDabbleButton
      clrPrimary={clrPrimary}
      clrSecondary={clrSecondary}
      width={width}
      onClick={handleDabble}
    >
      <span>{text}</span>
    </StyledDabbleButton>
  )
}

export default memo(DabbleButton)
