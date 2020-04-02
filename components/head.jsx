import Head from 'next/head'

export default ({title, description}) => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* <meta name="google-site-verification"
      content="VJd_qhe5PuurrIW61b1G-6RtlPrkHkEx9lHSNN8nLqs"
    /> */}
    <meta property="og:type" content="website"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:creator" content="Vasyl Bryndas"/>
    <meta property="og:title" content={title}/>
    <meta property="twitter:title" content={`${title} | Vasyl Bryndas`}/>
    <meta property="og:description" content={description}/>
    <meta property="twitter:description" content={description}/>
    <meta property="og:image" content={``}/>
    <meta property="og:image:secure_url" content={``}/>
    <title>{title}</title>

  </Head>
)
