import { useState, useEffect } from "react"

import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"

const Category = ({ category: { name, dabbles }, homeState }) => {
  const [randomDabbleNum, setRandomDabbleNum] = useState(
    Math.floor(Math.random() * dabbles.length)
  )

  useEffect(() => {
    let ranNum = Math.floor(Math.random() * dabbles.length)
    setRandomDabbleNum(ranNum)
  }, [homeState.trigger])

  return (
    <StyledCategory bgColor={dabbles[randomDabbleNum].color}>
      <SectionGrid>
        <span>{name}</span>
        <h1>{dabbles[randomDabbleNum].name}</h1>
        <LockIcon src="/images/lock-open.svg" />
      </SectionGrid>
    </StyledCategory>
  )
}

export default Category
