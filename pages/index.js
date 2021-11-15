// import { Client } from "@notionhq/client"
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
  return (
    <Main>
      <Category />
      <Category />
      <Category />
    </Main>
  )
}
