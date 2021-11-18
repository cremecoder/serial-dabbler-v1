// import { Client } from "@notionhq/client"
import { useContext } from "react"

import { Transition } from "react-transition-group"

import { LayoutContext } from "../components/Layout"
import Category from "../components/Category"
import Main from "../styles/Main.styled"
import Slide from "../styles/Slide.styled"
import Footer from "../components/Footer"

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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              obcaecati molestiae odio, earum beatae consequatur reiciendis
              perspiciatis dolore quisquam vitae tempore nesciunt quibusdam
              doloremque pariatur?
            </p>
          </Slide>
        )}
      </Transition>
      <Category />
      <Category width={width} />
      <Category />
      <Footer />
    </Main>
  )
}
