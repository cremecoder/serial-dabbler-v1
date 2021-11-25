import { useState, useEffect } from "react"

import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"

const Category = ({
  category: { name, dabbles },
  homeState: { trigger, isLocked }
}) => {
  const [categoryState, setCategoryState] = useState({
    randomDabbleNum: Math.floor(Math.random() * dabbles.length)
  })

  useEffect(() => {
    let ranNum = Math.floor(Math.random() * dabbles.length)
    setCategoryState(prev => ({
      ...prev,
      randomDabbleNum: ranNum
    }))
  }, [trigger])

  return (
    <StyledCategory bgColor={dabbles[categoryState.randomDabbleNum].color}>
      <SectionGrid>
        <span>{name}</span>
        <h1>{dabbles[categoryState.randomDabbleNum].name}</h1>
        <LockIcon src={`/images/lock-${isLocked ? "closed" : "open"}.svg`} />
      </SectionGrid>
    </StyledCategory>
  )
}

export default Category
