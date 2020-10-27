import React from "react"
import PropTypes from "prop-types"
import appleIcon57x57 from '../static/apple-icon-57x57.png';
import appleIcons60x60 from '../static/apple-icon-60x60.png';
import appleIcons72x72 from '../static/apple-icon-72x72.png';
import appleIcons76x76 from '../static/apple-icon-76x76.png';
import appleIcons114x114 from '../static/apple-icon-114x114.png';
import appleIcons120x120 from '../static/apple-icon-120x120.png';
import appleIcons144x144 from '../static/apple-icon-144x144.png';
import appleIcons152x152 from '../static/apple-icon-152x152.png';
import appleIcons180x180 from '../static/apple-icon-180x180.png';
import androidIcons192x192 from '../static/android-icon-192x192.png';
import favicon32x32 from '../static/favicon-32x32.png';
import favicon96x96 from '../static/favicon-96x96.png';
import favicon16x16 from '../static/favicon-16x16.png';
import msIcon144x144 from '../static/ms-icon-144x144.png';
import logo600x600 from '../static/logo-600x600.png';

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
        <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
        <link rel="apple-touch-icon" sizes="60x60" href={appleIcons60x60} />
        <link rel="apple-touch-icon" sizes="72x72" href={appleIcons72x72} />
        <link rel="apple-touch-icon" sizes="76x76" href={appleIcons76x76} />
        <link rel="apple-touch-icon" sizes="114x114" href={appleIcons114x114} />
        <link rel="apple-touch-icon" sizes="120x120" href={appleIcons120x120} />
        <link rel="apple-touch-icon" sizes="144x144" href={appleIcons144x144} />
        <link rel="apple-touch-icon" sizes="152x152" href={appleIcons152x152} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleIcons180x180} />
        <link rel="icon" type="image/png" sizes="192x192"  href={androidIcons192x192} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
        <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="msapplication-TileImage" content={msIcon144x144} />
        <meta name="description" content="Berlin Techno Narrative, une visite de l'Histoire de la musique Electronique à Berlin qui a marqué l'Histoire de la ville." />

        <meta property="og:description" content="Berlin Techno Narrative, une visite de l'Histoire de la musique Electronique à Berlin qui a marqué l'Histoire de la ville." />
        <meta property="og:title" content="Berlin Techno Narrative" />
        <meta property="og:url" content="https://berlintechnonarrative.com" />
        <meta property="og:image" content={logo600x600} />
        <meta property="og:image:secure_url" content={logo600x600} />
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
