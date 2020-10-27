import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="apple-touch-icon" sizes="57x57" href="../static/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="../static/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="../static/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="../static/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="../static/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="../static/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="../static/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="../static/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="../static/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="../static/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="../static/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="description" content="Berlin Techno Narrative, une visite de l'Histoire de la musique Electronique à Berlin qui a marqué l'Histoire de la ville." />

        <meta property="og:description" content="Berlin Techno Narrative, une visite de l'Histoire de la musique Electronique à Berlin qui a marqué l'Histoire de la ville." />
        <meta property="og:title" content="Berlin Techno Narrative" />
        <meta property="og:url" content="https://berlintechnonarrative.com" />
        <meta property="og:image" content="https://berlintechnonarrative.com/static/logo-600x600.png" />
        <meta property="og:image:secure_url" content="https://berlintechnonarrative.com/static/logo-600x600.png" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Berlin Techno Narrative logo" />
        <meta property="og:site_name" content="Berlin Techno Narrative" />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
