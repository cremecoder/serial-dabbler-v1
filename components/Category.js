import { useState, useEffect } from "react"

import StyledCategory from "../styles/Category.S/Category.styled"
import CategoryGrid from "../styles/Category.S/CategoryGrid.styled"
import FadeInText from "./FadeInText"
import Lock from "./Lock"

import { handlePrevNumRepeat } from "../utils/functions"

const Category = ({ category: { name, dabbles }, trigger, index }) => {
  const [randomDabbleNum, setRandomDabbleNum] = useState(
    Math.floor(Math.random() * dabbles.length)
  )
  const [isLocked, setIsLocked] = useState(false)

  useEffect(() => {
    if (!isLocked) {
      let ranNum = Math.floor(Math.random() * dabbles.length)
      setRandomDabbleNum(
        handlePrevNumRepeat(randomDabbleNum, ranNum, dabbles.length)
      )
    }
  }, [trigger])

  const handleLock = () => {
    setIsLocked(prev => !prev)
  }

  return (
    <StyledCategory bgColor={dabbles[randomDabbleNum].color}>
      <CategoryGrid>
        <p>{name}</p>
        <FadeInText
          key={dabbles[randomDabbleNum].name}
          name={dabbles[randomDabbleNum].name}
          index={index}
        />
        <hr />
        <Lock isLocked={isLocked} handleLock={handleLock} />
      </CategoryGrid>
    </StyledCategory>
  )
}

export default Category
