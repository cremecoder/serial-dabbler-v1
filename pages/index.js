// import { Client } from "@notionhq/client"
import { useContext } from "react"

import { Transition } from "react-transition-group"

import { LayoutContext } from "../components/Layout"
import Category from "../components/Category"
import Main from "../styles/Main.styled"
import Slide from "../styles/Slide.styled"
import DabbleBar from "../components/DabbleBar"

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
  const { width, isOverlayOpen } = useContext(LayoutContext)

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
