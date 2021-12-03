import Image from "next/image"
import { useState, useEffect } from "react"

import StyledCategory from "../styles/Category.S/Category.styled"
import CategoryGrid from "../styles/Category.S/CategoryGrid.styled"

const Category = ({ category: { name, dabbles }, trigger }) => {
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

  console.log("Category")
  return (
    <StyledCategory bgColor={dabbles[randomDabbleNum].color}>
      <CategoryGrid>
        <p>{name}</p>
        <h1>{dabbles[randomDabbleNum].name}</h1>
        <Image
          src={`/images/lock-${isLocked ? "closed" : "open"}.svg`}
          width={28}
          height={28}
          onClick={handleLock}
        />
      </CategoryGrid>
    </StyledCategory>
  )
}

export default Category
