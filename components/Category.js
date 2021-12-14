import Image from "next/image"
import { useState, useEffect, useRef } from "react"

import StyledCategory from "../styles/Category.S/Category.styled"
import CategoryGrid from "../styles/Category.S/CategoryGrid.styled"

const Category = ({ category: { name, dabbles }, trigger }) => {
  const nodeRef = useRef(null)
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
      <CategoryGrid>
        <p>{name}</p>
        <h1 className="roll-out" key={dabbles[randomDabbleNum].name}>
          {dabbles[randomDabbleNum].name}
        </h1>
        <Image
          src={`/images/lock-${isLocked ? "closed" : "open"}.svg`}
          alt={"lock-icon"}
          width={28}
          height={28}
          onClick={handleLock}
        />
      </CategoryGrid>
    </StyledCategory>
  )
}

export default Category
