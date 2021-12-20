import Image from "next/image"

const Lock = ({ isLocked, handleLock }) => {
  return (
    <Image
      src={`/images/lock-${isLocked ? "closed" : "open"}.svg`}
      alt={"lock-icon"}
      width={28}
      height={28}
      onClick={() => handleLock()}
    />
  )
}

export default Lock
