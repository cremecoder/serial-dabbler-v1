import { useState, useEffect } from "react"

import Wrapper from "../styles/Wrapper.styled"
import Navbar from "./Navbar"
import Footer from "./Footer"

// Create Layout context?

const Layout = ({ children }) => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth])
  const [height, width] = size

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Wrapper>
      {/* <div>{`height: ${height}, width: ${width}`}</div> */}
      <Navbar width={width} />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
