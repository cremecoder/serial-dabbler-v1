import Category from "../components/Category"
import Main from "../styles/Main.styled"
import { useState, useEffect } from "react"

// getStaticProps - theme vars and contentful categories

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 1366) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }, [])

  return (
    <Main>
      <Category />
      <Category isDesktop={isDesktop} />
      <Category />
    </Main>
  )
}
