import { useState, memo, useCallback } from "react"
import { useTheme } from "styled-components"

import Category from "./Category"
import DabbleButton from "./DabbleButton"
import Dabblebar from "./Dabblebar"

const Categories = ({ categories }) => {
  const theme = useTheme()
  const [trigger, setTrigger] = useState(false)

  const handleDabble = useCallback(() => {
    setTrigger(prev => !prev)
  }, [])

  return (
    <>
      {categories.map((category, index) => (
        <Category
          key={category.id}
          category={category}
          index={index}
          trigger={trigger}
        />
      ))}
      <DabbleButton
        text="LET'S DABBLE"
        clrPrimary={theme.colors.black}
        clrSecondary={theme.colors.white}
        handleDabble={handleDabble}
      />
      <Dabblebar handleDabble={handleDabble} />
    </>
  )
}

export default memo(Categories)
