// import { Client } from "@notionhq/client"
import { AppContext } from "./_app"
import { useContext } from "react"
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
  const isDesktop = useContext(AppContext)

  return (
    <Main>
      <Category />
      <Category isDesktop={isDesktop} />
      <Category />
    </Main>
  )
}
