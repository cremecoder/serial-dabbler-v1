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

  useEffect(() => {
    if (!isLocked) {
      let ranNum = Math.floor(Math.random() * dabbles.length)
      setCategoryState(prev => ({
        ...prev,
        randomDabbleNum: handlePrevNumRepeat(randomDabbleNum, ranNum)
      }))
    }
  }, [trigger])

  const handlePrevNumRepeat = (prev, current) => {
    if (prev === current) {
      let newNum = Math.floor(Math.random() * dabbles.length)
      return handlePrevNumRepeat(current, newNum)
    }
    return current
  }

  const handleLock = () => {
    setCategoryState(prev => ({
      ...prev,
      isLocked: !isLocked
    }))
  }

  return (
    <StyledCategory bgColor={dabbles[randomDabbleNum].color}>
      <CategoryGrid>
        <p>{name}</p>
        <h1 key={dabbles[randomDabbleNum].name}>
          {dabbles[randomDabbleNum].name}
        </h1>
        <hr />
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

// always dabble: ranNum = prevNum ? dabble again
// transition bold txt, not border bottom
// stagger animations
