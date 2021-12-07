import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Transition } from "react-transition-group"

import StyledCategory from "../styles/Category.S/Category.styled"
import CategoryGrid from "../styles/Category.S/CategoryGrid.styled"

const Category = ({ category: { name, dabbles }, trigger }) => {
  // const nodeRef = useRef(null)
  const [categoryState, setCategoryState] = useState({
    randomDabbleNum: Math.floor(Math.random() * dabbles.length),
    isLocked: false,
    animate: false
  })
  const { randomDabbleNum, isLocked, animate } = categoryState

  const handleLock = () => {
    setCategoryState(prev => ({
      ...prev,
      isLocked: !isLocked
    }))
  }

  // useEffect(() => {
  //   if (animate === true) {
  //     setCategoryState(prev => ({
  //       ...prev,
  //       animate: false
  //     }))
  //   }
  // }, [])

  useEffect(() => {
    if (!isLocked) {
      let ranNum = Math.floor(Math.random() * dabbles.length)
      setCategoryState(prev => ({
        ...prev,
        randomDabbleNum: ranNum,
        animate: !animate
      }))
    }
  }, [trigger])

  return (
    <Transition in={animate} timeout={300}>
      {state => (
        <StyledCategory
          bgColor={dabbles[randomDabbleNum].color}
          aniState={state}
        >
          <CategoryGrid>
            <p>{name}</p>
            <h1>{dabbles[randomDabbleNum].name}</h1>
            <Image
              src={`/images/lock-${isLocked ? "closed" : "open"}.svg`}
              alt={"lock-icon"}
              width={28}
              height={28}
              onClick={handleLock}
            />
          </CategoryGrid>
        </StyledCategory>
      )}
    </Transition>
  )
}

export default Category
