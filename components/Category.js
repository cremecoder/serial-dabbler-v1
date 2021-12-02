import Image from "next/image"
import { useState, useEffect, useRef } from "react"

import { Transition } from "react-transition-group"
import { useTheme } from "styled-components"

import { StyledCategory } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"

const Category = ({ category: { name, dabbles }, trigger }) => {
  const theme = useTheme()
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

  console.log("Category")
  return (
    <Transition
      in={trigger}
      timeout={theme.durations.categories}
      nodeRef={nodeRef}
    >
      <StyledCategory bgColor={dabbles[randomDabbleNum].color}>
        <SectionGrid>
          <p>{name}</p>
          <h1>{dabbles[randomDabbleNum].name}</h1>

          <Image
            src={`/images/lock-${isLocked ? "closed" : "open"}.svg`}
            width={28}
            height={28}
            onClick={handleLock}
          />
        </SectionGrid>
      </StyledCategory>
    </Transition>
  )
}

export default Category
