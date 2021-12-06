import styled from "styled-components"
import { GrClose } from "react-icons/gr"

export const CloseButton = styled(GrClose)`
  background-color: white;
  font-size: 2em;
  cursor: pointer;
`

export const DabbleButton = styled.button`
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

export const OverlayButton = styled.button`
  background: transparent;
  color: ${props => props.clrPrimary};
  outline: none;
  border: none;
  cursor: pointer;
`
