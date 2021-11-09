import Category from "../components/Category"
import Main from "../styles/Main.styled"
import { useState, useEffect } from "react"
import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export async function getStaticProps() {
  const database_id = process.env.NOTION_DATABASE_ID

  const payload = {
    path: `databases/${database_id}/query`,
    method: "POST"
  }

  const { results } = await notion.request(payload)

  return {
    props: {
      listItems: results
    }
  }
}

export default function Home({ listItems }) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    console.log(listItems)
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
