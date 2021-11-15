// import { Client } from "@notionhq/client"
import { useContext } from "react"
import { LayoutContext } from "../components/Layout"
import Category from "../components/Category"
import Main from "../styles/Main.styled"

// const notion = new Client({
//   auth: process.env.NOTION_TOKEN
// })

// export async function getStaticProps() {
//   const database_id = process.env.NOTION_DATABASE_ID

//   const payload = {
//     path: `databases/${database_id}/query`,
//     method: "POST"
//   }

//   const { results } = await notion.request(payload)

//   return {
//     props: {
//       listItems: results
//     }
//   }
// }

export default function Home() {
  const { width } = useContext(LayoutContext)

  return (
    <Main>
      <Category />
      <Category width={width} />
      <Category />
    </Main>
  )
}
