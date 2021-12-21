import Image from "next/image"
import { memo } from "react"
import { useTheme } from "styled-components"
import {
  StyledNav,
  FlexNav,
  OverlayButton
} from "../styles/Navbar.S/Navbar.styled"

const Navbar = ({ isOverlayOpen, handleOverlayToggle }) => {
  const theme = useTheme()

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

export default memo(Navbar)
