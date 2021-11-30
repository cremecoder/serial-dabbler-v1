import { Client } from "@notionhq/client"
import { createContext, useContext, useReducer, useRef } from "react"
import uuid from "react-uuid"

import { Transition } from "react-transition-group"
import { useTheme } from "styled-components"

import { LayoutContext } from "../components/Layout"
import Slide from "../components/Slide"
import Category from "../components/Category"
import Main from "../styles/Main.styled"
import DabbleBar from "../components/DabbleBar"
import { DabbleButton } from "../styles/Buttons.styled"

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

export const HomeContext = createContext()

const homeReducer = (state, action) => {
  switch (action.type) {
    case "TRIGGER":
      return {
        ...state,
        trigger: !state.trigger
      }
  }
}

function Home({ categories }) {
  const theme = useTheme()
  const nodeRef = useRef(null)
  const { width, isOverlayOpen } = useContext(LayoutContext)

  const initialHomeState = {
    trigger: false
  }

  const [homeState, homeDispatch] = useReducer(homeReducer, initialHomeState)

  // useMemo = return value of a funcyion
  // useCallback = the function itself
  console.log("index rendered")
  return (
    <Main>
      <Transition in={isOverlayOpen} timeout={400} nodeRef={nodeRef}>
        {state => <Slide slideState={state} />}
      </Transition>
      <HomeContext.Provider value={{ homeState, homeDispatch }}>
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
        {width >= 1366 && (
          <DabbleButton
            clrPrimary={theme.colors.black}
            clrSecondary={theme.colors.white}
            onClick={() => homeDispatch({ type: "TOGGLE" })}
          >
            <span>LET&apos;S DABBLE</span>
          </DabbleButton>
        )}
        <DabbleBar />
      </HomeContext.Provider>
    </Main>
  )
}

export default Home
