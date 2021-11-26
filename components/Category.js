import { useState, useEffect } from "react"

import { Transition } from "react-transition-group"

import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"

const Category = ({ category: { name, dabbles }, homeState: { trigger } }) => {
  const [categoryState, setCategoryState] = useState({
    randomDabbleNum: Math.floor(Math.random() * dabbles.length),
    isLocked: false,
    isLoaded: false
  })
  const { randomDabbleNum, isLocked, isLoaded } = categoryState

  const handleLock = () => {
    setCategoryState(prev => ({
      ...prev,
      isLocked: !isLocked
    }))
  }

  useEffect(() => {
    setCategoryState(prev => ({
      ...prev,
      isLoaded: true
    }))
  }, [])

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
    <Transition in={isLoaded}>
      {state => (
        <StyledCategory bgColor={dabbles[randomDabbleNum].color} state={state}>
          <SectionGrid>
            <span>{name}</span>
            <h1>{dabbles[randomDabbleNum].name}</h1>
            <LockIcon
              src={`/images/lock-${isLocked ? "closed" : "open"}.svg`}
              onClick={handleLock}
            />
          </SectionGrid>
        </StyledCategory>
      )}
    </Transition>
  )
}

export default Category
