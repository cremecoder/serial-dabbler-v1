import Head from "next/head"

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <link
        rel="preload"
        href="/fonts/Bolden-Display_Hust.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/DMSans-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/DMSans-Medium.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>
  )
}
Meta.defaultProps = {
  title: "Serial Dabbler - V1",
  keywords: "serial, dabbler, creative, process, build, tool",
  description: "A tool for creatives to expand their skills."
}

export default Meta
