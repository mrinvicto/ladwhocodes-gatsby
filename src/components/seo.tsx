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
  const { location, title, meta, language = "en" } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location?.pathname === rootPath
  const fomattedTitle = isRootPath ? title : `${title} | ${BLOG_TITLE_SUFFIX}`
  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={fomattedTitle}
      meta={getCombinedMetaDetails(
        meta,
        getCompletePageURL(location?.pathname || "")
      )}
      link={getMetaLinks(getCompletePageURL(location?.pathname || ""))}
    />
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
