import { Client } from "@notionhq/client"
import { useContext, useState, useRef } from "react"
import uuid from "react-uuid"

import { Transition } from "react-transition-group"
import { useTheme } from "styled-components"

import { LayoutStateContext } from "../components/Layout"
import Slide from "../components/Slide"
import Category from "../components/Category"
import Dabblebar from "../components/Dabblebar"

import Main from "../styles/Main.S/Main.styled"
import { DabbleButton } from "../styles/CallToAction.S/Buttons.styled"

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
  const nodeRef = useRef(null)
  const { isOverlayOpen } = useContext(LayoutStateContext)

  const [homeState, setHomeState] = useState({
    trigger: false
  })

  const handleDabble = () => {
    setHomeState(prev => ({
      ...prev,
      trigger: !homeState.trigger
    }))
  }

  return (
    <Main>
      <Transition
        in={isOverlayOpen}
        timeout={theme.durations.slide}
        nodeRef={nodeRef}
      >
        {state => <Slide slideState={state} />}
      </Transition>
      {categories.map(category => (
        <Category
          key={category.id}
          category={category}
          trigger={homeState.trigger}
        />
      ))}
      {!isOverlayOpen && (
        <DabbleButton
          clrPrimary={theme.colors.black}
          clrSecondary={theme.colors.white}
          onClick={handleDabble}
        >
          <span>LET&apos;S DABBLE</span>
        </DabbleButton>
      )}
      <Dabblebar handleDabble={handleDabble} />
    </Main>
  )
}

export default Home
