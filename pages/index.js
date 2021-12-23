import { Client } from "@notionhq/client"
import { useState } from "react"
import uuid from "react-uuid"

import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import Categories from "../components/Categories"

import Main from "../styles/Main.S/Main.styled"

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export async function getStaticProps() {
  const getData = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID
  })
  const { results } = getData

  const formatObjects = results.map(obj => {
    return {
      id: obj.id,
      name: obj.properties.Name.title[0].plain_text,
      color: obj.properties.Colour.rich_text[0].plain_text,
      category: obj.properties.Status.select.name,
      hasRule: obj.properties.Rules.multi_select[0].name
    }
  })

  const categories = [
    {
      id: uuid(),
      name: "LOOK & FEEL",
      dabbles: []
    },
    {
      id: uuid(),
      name: "MEDIUM",
      dabbles: []
    },
    {
      id: uuid(),
      name: "FOCUS",
      dabbles: []
    }
  ]

  formatObjects.forEach(obj => {
    switch (obj.category) {
      case "LOOK & FEEL":
        categories[0].dabbles.push(obj)
        break
      case "MEDIUM":
        categories[1].dabbles.push(obj)
        break
      case "FOCUS":
        categories[2].dabbles.push(obj)
        break
    }
  })

  return {
    props: {
      categories,
      revalidate: 100
    }
  }
}

function Home({ categories }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const handleOverlayToggle = () => {
    setIsOverlayOpen(prev => !prev)
  }

  return (
    <>
      <Navbar
        isOverlayOpen={isOverlayOpen}
        handleOverlayToggle={handleOverlayToggle}
      />
      <Main>
        <Slide
          isOverlayOpen={isOverlayOpen}
          handleOverlayToggle={handleOverlayToggle}
        />
        <Categories categories={categories} />
      </Main>
    </>
  )
}

export default Home
