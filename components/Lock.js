import Image from "next/image"

const Lock = ({ isLocked, handleLock }) => {
  return (
    <>
      {isLocked ? (
        <Image
          src={`/images/lock-closed.svg`}
          alt={"lock-icon"}
          width={40}
          height={40}
          onClick={() => handleLock()}
        />
      ) : (
        <Image
          src={`/images/lock-open.svg`}
          alt={"lock-icon"}
          width={40}
          height={40}
          onClick={() => handleLock()}
        />
      )}
    </>
  )
}

export default Lock
