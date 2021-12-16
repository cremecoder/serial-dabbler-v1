import Image from "next/image"
import { useState, useEffect, useRef } from "react"

import Fade from "../styles/Category.S/Fade.styled"
import StyledCategory from "../styles/Category.S/Category.styled"
import CategoryGrid from "../styles/Category.S/CategoryGrid.styled"

const Category = ({ category: { name, dabbles }, trigger, index }) => {
  const nodeRef = useRef(null)
  const [categoryState, setCategoryState] = useState({
    randomDabbleNum: Math.floor(Math.random() * dabbles.length),
    isLocked: false
    // fadeDelay: index * 100 + "ms"
  })
  const { randomDabbleNum, isLocked, fadeDelay, show } = categoryState

  useEffect(() => {
    if (!isLocked) {
      let ranNum = Math.floor(Math.random() * dabbles.length)
      setCategoryState(prev => ({
        ...prev,
        randomDabbleNum: handlePrevNumRepeat(randomDabbleNum, ranNum)
      }))
    }
  }, [trigger])

  useEffect(() => {
    console.log("render")
  }, [])

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
        <Fade
          key={dabbles[randomDabbleNum].name}
          name={dabbles[randomDabbleNum].name}
          // delay={fadeDelay}
          index={index}
        />
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
