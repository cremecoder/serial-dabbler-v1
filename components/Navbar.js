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
          src="/images/SD_Logo_white-01-03.svg"
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
              width={16}
              height={16}
            />
          ) : (
            <span>ABOUT</span>
          )}
        </OverlayButton>
      </FlexNav>
    </StyledNav>
  )
}

export default memo(Navbar)
