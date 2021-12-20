import { Client } from "@notionhq/client"
import { useContext, useState, useCallback } from "react"
import uuid from "react-uuid"

import { useTheme } from "styled-components"

import { LayoutStateContext } from "../components/Layout"
import Slide from "../components/Slide"
import Category from "../components/Category"
import Dabblebar from "../components/Dabblebar"

import Main from "../styles/Main.S/Main.styled"
import DabbleButton from "../components/DabbleButton"

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
      name: "Look & Feel",
      dabbles: []
    },
    {
      id: uuid(),
      name: "Medium",
      dabbles: []
    },
    {
      id: uuid(),
      name: "Focus",
      dabbles: []
    }
  ]

  formatObjects.forEach(obj => {
    switch (obj.category) {
      case "Look & Feel":
        categories[0].dabbles.push(obj)
        break
      case "Medium":
        categories[1].dabbles.push(obj)
        break
      case "Focus":
        categories[2].dabbles.push(obj)
        break
    }
  })

  return {
    props: {
      categories
    }
  }
}

function Home({ categories }) {
  const theme = useTheme()
  const { isOverlayOpen } = useContext(LayoutStateContext)

  const [trigger, setTrigger] = useState(false)

  const handleDabble = useCallback(() => {
    setTrigger(prev => !prev)
  }, [])

  return (
    <Main>
      <Slide />
      {categories.map((category, index) => (
        <Category
          key={category.id}
          category={category}
          index={index}
          trigger={trigger}
        />
      ))}
      {!isOverlayOpen && (
        <DabbleButton
          text="LET'S DABBLE"
          clrPrimary={theme.colors.black}
          clrSecondary={theme.colors.white}
          handleDabble={handleDabble}
        />
      )}
      <Dabblebar handleDabble={handleDabble} />
    </Main>
  )
}

export default Home
