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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <link
        rel="preload"
        href="/fonts/BoldenRegularRegular.woff"
        as="font"
        crossOrigin="true"
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
