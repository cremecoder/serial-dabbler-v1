import { useState, useEffect } from "react"

import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"

const Category = ({ category: { name, dabbles }, homeState: { trigger } }) => {
  const [categoryState, setCategoryState] = useState({
    randomDabbleNum: Math.floor(Math.random() * dabbles.length),
    isLocked: false
  })
  const { randomDabbleNum, isLocked } = categoryState

  const handleLock = () => {
    setCategoryState(prev => ({
      ...prev,
      isLocked: !isLocked
    }))
  }

  useEffect(() => {
    if (!isLocked) {
      let ranNum = Math.floor(Math.random() * dabbles.length)
      setCategoryState(prev => ({
        ...prev,
        randomDabbleNum: ranNum
      }))
    }
  }, [trigger])

  return (
    <StyledCategory bgColor={dabbles[randomDabbleNum].color}>
      <SectionGrid>
        <span>{name}</span>
        <h1>{dabbles[randomDabbleNum].name}</h1>
        <LockIcon
          src={`/images/lock-${isLocked ? "closed" : "open"}.svg`}
          onClick={handleLock}
        />
      </SectionGrid>
    </StyledCategory>
  )
}

export default Category
