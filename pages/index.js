import { Client } from "@notionhq/client"
import { createContext, useContext, useState, useReducer } from "react"
import uuid from "react-uuid"

import { Transition } from "react-transition-group"
import { useTheme } from "styled-components"

import { LayoutContext } from "../components/Layout"
import Category from "../components/Category"
import Main from "../styles/Main.styled"
import Slide from "../styles/Slide.styled"
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
  const initialHomeState = {
    trigger: false
  }

  const {
    size: { width },
    isOverlayOpen
  } = useContext(LayoutContext)
  const theme = useTheme()
  const [homeState, homeDispatch] = useReducer(homeReducer, initialHomeState)

  // console.log(homeState.trigger)
  return (
    <Main>
      <Transition in={isOverlayOpen} timeout={400}>
        {state => (
          <Slide width={width} state={state}>
            <h1>DABBLE IN IN THINGS</h1>
            <h1>DABBLE IN OLD SKILLS</h1>
            <h1>DABBLE WITH FRESH IDEAS OR</h1>
            <h1>SWIPE THE DUST OFF OLD ONES</h1>
            <h1>DABBLE EVERYDAY</h1>
            <h1>OR DABBLE EVERY WEEK</h1>
            <h1>DABBLE TILL THE SUN COMES UP</h1>
            <h1>OR DABBLE FOR A BIT.</h1>
            <h1>DABBLE IN IN THINGS</h1>
            <h1>DABBLE IN OLD SKILLS</h1>
            <h1>DABBLE WITH FRESH IDEAS OR</h1>
            <h1>SWIPE THE DUST OFF OLD ONES</h1>
            <h1>DABBLE EVERYDAY</h1>
            <h1>OR DABBLE EVERY WEEK</h1>
            <h1>DABBLE TILL THE SUN COMES UP</h1>
            <h1>OR DABBLE FOR A BIT.</h1>
            <h1>DABBLE IN IN THINGS</h1>
            <h1>DABBLE IN OLD SKILLS</h1>
            <h1>DABBLE WITH FRESH IDEAS OR</h1>
            <h1>SWIPE THE DUST OFF OLD ONES</h1>
            <h1>DABBLE EVERYDAY</h1>
            <h1>OR DABBLE EVERY WEEK</h1>
            <h1>DABBLE TILL THE SUN COMES UP</h1>
            <h1>OR DABBLE FOR A BIT.</h1>
            <h1>DABBLE IN IN THINGS</h1>
            <h1>DABBLE IN OLD SKILLS</h1>
            <h1>DABBLE WITH FRESH IDEAS OR</h1>
            <h1>SWIPE THE DUST OFF OLD ONES</h1>
            <h1>DABBLE EVERYDAY</h1>
            <h1>OR DABBLE EVERY WEEK</h1>
            <h1>DABBLE TILL THE SUN COMES UP</h1>
            <h1>OR DABBLE FOR A BIT.</h1>
            <h1>DABBLE IN IN THINGS</h1>
            <h1>DABBLE IN OLD SKILLS</h1>
            <h1>DABBLE WITH FRESH IDEAS OR</h1>
            <h1>SWIPE THE DUST OFF OLD ONES</h1>
            <h1>DABBLE EVERYDAY</h1>
            <h1>OR DABBLE EVERY WEEK</h1>
            <h1>DABBLE TILL THE SUN COMES UP</h1>
            <h1>OR DABBLE FOR A BIT.</h1>
            <h1>DABBLE IN IN THINGS</h1>
            <h1>DABBLE IN OLD SKILLS</h1>
            <h1>DABBLE WITH FRESH IDEAS OR</h1>
            <h1>SWIPE THE DUST OFF OLD ONES</h1>
            <h1>DABBLE EVERYDAY</h1>
            <h1>OR DABBLE EVERY WEEK</h1>
            <h1>DABBLE TILL THE SUN COMES UP</h1>
            <h1>OR DABBLE FOR A BIT.</h1>
            <h1>DABBLE IN IN THINGS</h1>
            <h1>DABBLE IN OLD SKILLS</h1>
            <h1>DABBLE WITH FRESH IDEAS OR</h1>
            <h1>SWIPE THE DUST OFF OLD ONES</h1>
            <h1>DABBLE EVERYDAY</h1>
            <h1>OR DABBLE EVERY WEEK</h1>
            <h1>DABBLE TILL THE SUN COMES UP</h1>
            <h1>OR DABBLE FOR A BIT.</h1>
            <h1>DABBLE IN IN THINGS</h1>
            <h1>DABBLE IN OLD SKILLS</h1>
            <h1>DABBLE WITH FRESH IDEAS OR</h1>
            <h1>SWIPE THE DUST OFF OLD ONES</h1>
            <h1>DABBLE EVERYDAY</h1>
            <h1>OR DABBLE EVERY WEEK</h1>
            <h1>DABBLE TILL THE SUN COMES UP</h1>
            <h1>OR DABBLE FOR A BIT.</h1>
            <h1>DABBLE IN IN THINGS</h1>
            <h1>DABBLE IN OLD SKILLS</h1>
            <h1>DABBLE WITH FRESH IDEAS OR</h1>
            <h1>SWIPE THE DUST OFF OLD ONES</h1>
            <h1>DABBLE EVERYDAY</h1>
            <h1>OR DABBLE EVERY WEEK</h1>
            <h1>DABBLE TILL THE SUN COMES UP</h1>
            <h1>OR DABBLE FOR A BIT.</h1>
          </Slide>
        )}
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
            <span>LET'S DABBLE</span>
          </DabbleButton>
        )}
        <DabbleBar />
      </HomeContext.Provider>
    </Main>
  )
}

export default Home
