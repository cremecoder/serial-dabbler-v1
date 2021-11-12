// import { Client } from "@notionhq/client"
import { useState, useEffect } from "react"

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
  const [isDesktop, setIsDesktop] = useState(false)

  // Doesn’t display when going from portrait to landscape ipad large or desktop
  // Window is undefined any other way because of Next pre-rendering
  useEffect(() => {
    if (window.innerWidth >= 1366) {
      setIsDesktop(true)
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
