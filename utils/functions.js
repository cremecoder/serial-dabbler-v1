export const handlePrevNumRepeat = (prev, current, length) => {
  if (prev === current) {
    let newNum = Math.floor(Math.random() * length)
    return handlePrevNumRepeat(current, newNum, length)
  }
  return current
}
