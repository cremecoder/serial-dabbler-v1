import { Client } from "@notionhq/client"
import { useContext, useReducer } from "react"
import uuid from "react-uuid"

import { Transition } from "react-transition-group"

import { LayoutContext } from "../components/Layout"
import Category from "../components/Category"
import Main from "../styles/Main.styled"
import Slide from "../styles/Slide.styled"
import DabbleBar from "../components/DabbleBar"

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
      category: obj.properties.Status.select.name
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

export default function Home({ categories }) {
  const { width, isOverlayOpen } = useContext(LayoutContext)
  const [homeState, homeDispatch] = useReducer(homeReducer, initialHomeState)

  const initialHomeState = {
    [categories[0].name]: {
      randomizeDabbleNum: Math.floor(
        Math.random() * categories[0].dabbles.length
      )
    },
    [categories[1].name]: {
      randomizeDabbleNum: categories[1].dabbles.length
    },
    [categories[2].name]: {
      randomizeDabbleNum: categories[2].dabbles.length
    }
  }
  //        homeState = pass to Categories as props
  //     homeDispatch = onClick change component based on length
  //      homeReducer = change state. Random num based on dabble.length
  // initialHomeState = holds each categories length
  // console.log(initialHomeState)

  const homeReducer = (state, action) => {
    switch (action.type) {
      case "Look & Feel":
        return {
          ...state,
          "Look & Feel": {
            randomizeDabbleNum: Math.floor(
              Math.random() * categories[0].dabbles.length
            )
          }
        }
      case "Medium":
        return {
          ...state,
          Medium: {
            randomizeDabbleNum: Math.floor(
              Math.random() * categories[1].dabbles.length
            )
          }
        }
      case "Focus":
        return {
          ...state,
          Focus: {
            randomizeDabbleNum: Math.floor(
              Math.random() * categories[2].dabbles.length
            )
          }
        }
    }
  }

  return (
    <Main>
      <Transition in={isOverlayOpen} timeout={300}>
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
      {categories.map(category => (
        <Category
          key={category.id}
          category={category}
          homeState={homeState}
          homeDispatch={homeDispatch}
        />
      ))}
      <DabbleBar />
    </Main>
  )
}
