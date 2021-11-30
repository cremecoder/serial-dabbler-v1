import { useState, useEffect, useContext, memo } from "react"

import { HomeContext } from "../pages/index"

import { StyledCategory, LockIcon } from "../styles/Category.styled"
import SectionGrid from "../styles/SectionGrid.styled"

const Category = ({ category: { name, dabbles } }) => {
  const {
    homeState: { trigger }
  } = useContext(HomeContext)

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
  console.log("Category rendered")
  // useEffect(() => {
  //   if (!isLocked) {
  //     let ranNum = Math.floor(Math.random() * dabbles.length)
  //     setCategoryState(prev => ({
  //       ...prev,
  //       randomDabbleNum: ranNum
  //     }))
  //   }
  // }, [homeState.trigger])
  // console.log(trigger)

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

export default memo(Category)
