import Image from "next/image"

const Instacon = () => {
  return (
    <a
      href="https://www.instagram.com/serial.dabbler"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={`/images/instagram.svg`}
        alt={"instagram"}
        width={32}
        height={32}
      />
    </a>
  )
}

export default Instacon
