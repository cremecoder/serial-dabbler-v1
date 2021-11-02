import Category from "../components/Category"
import Main from "../styles/Main.styled"

// getStaticProps - theme vars and contentful categories

export default function Home() {
  return (
    <Main>
      <Category />
      <Category />
      <Category />
    </Main>
  )
}
