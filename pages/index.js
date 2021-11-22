import { Client } from "@notionhq/client"
import { useContext } from "react"

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
      category: {
        name: obj.properties.Status.select.name,
        id: obj.properties.Status.select.id
      }
    }
  })

  let categories = {
    lookFeel: [],
    medium: [],
    focus: []
  }

  formatObjects.forEach(obj => {
    switch (obj.category.name) {
      case "Look & Feel":
        categories.lookFeel.push(obj)
        break
      case "Medium":
        categories.medium.push(obj)
        break
      case "Focus":
        categories.focus.push(obj)
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
  console.log(categories)
  const { width, isOverlayOpen } = useContext(LayoutContext)
  const { lookFeel, medium, focus } = categories

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
      <Category />
      <Category width={width} />
      <Category />
      <DabbleBar />
    </Main>
  )
}
