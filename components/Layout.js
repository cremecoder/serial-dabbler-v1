import { Wrapper, Flex } from "../styles/Utils.styled"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
