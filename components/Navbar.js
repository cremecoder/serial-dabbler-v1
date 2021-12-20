import Image from "next/image"
import { useContext } from "react"
import { useTheme } from "styled-components"

import { LayoutStateContext, LayoutHandleContext } from "../components/Layout"

import {
  StyledNav,
  FlexNav,
  OverlayButton
} from "../styles/Navbar.S/Navbar.styled"

const Navbar = () => {
  const theme = useTheme()
  const { isOverlayOpen } = useContext(LayoutStateContext)
  const { handleOverlayToggle } = useContext(LayoutHandleContext)

  return (
    <StyledNav>
      <FlexNav>
        <Image
          src="/images/logo.svg"
          alt="Serial Dabbler"
          width={75}
          height={50}
        />
        <OverlayButton
          onClick={() => handleOverlayToggle()}
          clrPrimary={theme.colors.white}
        >
          {isOverlayOpen ? (
            <Image
              src={`/images/close.svg`}
              alt={"close"}
              width={28}
              height={28}
            />
          ) : (
            <span>ABOUT</span>
          )}
        </OverlayButton>
      </FlexNav>
      {isOverlayOpen && <hr />}
    </StyledNav>
  )
}

export default Navbar
