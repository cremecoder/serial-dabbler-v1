import Image from "next/image"
import { useContext } from "react"
import { useTheme } from "styled-components"
import { LayoutContext } from "../components/Layout"

import { StyledNav, FlexNav } from "../styles/Navbar.styled"
import { OverlayButton } from "../styles/Buttons.styled"

const Navbar = () => {
  const theme = useTheme()
  const { width, isOverlayOpen, handleOverlayToggle } = useContext(
    LayoutContext
  )

  return (
    <StyledNav>
      <FlexNav>
        <Image
          src="/images/logo.svg"
          alt="Serial Dabbler"
          width={75}
          height={50}
        />
        {isOverlayOpen && width >= 1366 ? (
          ""
        ) : (
          <OverlayButton
            onClick={() => handleOverlayToggle()}
            clrPrimary={theme.colors.white}
          >
            <span>{isOverlayOpen ? "X" : "ABOUT"}</span>
          </OverlayButton>
        )}
      </FlexNav>
      {isOverlayOpen && width <= 1366 && <hr />}
    </StyledNav>
  )
}

export default Navbar
