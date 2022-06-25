/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { PageSEOInfo } from "../models/PageSEOInfo"
import { BLOG_TITLE_SUFFIX } from "../utils/constants"
import {
  getCombinedMetaDetails,
  getCompletePageURL,
  getMetaLinks,
} from "../utils/helpers"

const Seo = (props: PageSEOInfo) => {
  const {
    location,
    title,
    meta,
    language = "en",
    shouldAppendTitle = false,
  } = props
  const fomattedTitle = !shouldAppendTitle
    ? title
    : `${title} | ${BLOG_TITLE_SUFFIX}`
  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={fomattedTitle}
      meta={getCombinedMetaDetails(
        { ...meta, title: meta.title || fomattedTitle },
        getCompletePageURL(location?.pathname || "")
      )}
      link={getMetaLinks(getCompletePageURL(location?.pathname || ""))}
    >
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6999295635811899"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
