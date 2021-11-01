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
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  )
}
Meta.defaultProps = {
  title: "Serial Dabbler - V1",
  keywords: "serial, dabbler, creative, process, build, tool",
  description: "A tool for creatives to expand their skills."
}

export default Meta
