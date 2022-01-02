/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import * as PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { SITE_TITLE } from "../../../constants"
import { WindowLocation } from "@reach/router"
import {
  IMetaTags,
  IOGTags,
  ITwitterCard,
  getCombinedMetaTags,
} from "./seoHelpers"

const Seo = ({ lang, meta, title, og, twitterCard, location }: ISeoProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={isRootPath ? "" : `%s | ${SITE_TITLE}`}
      meta={getCombinedMetaTags(
        meta,
        { ...og, url: location.pathname },
        twitterCard
      )}
    />
  )
}

interface ISeoProps {
  lang: string
  meta: IMetaTags
  title: string
  location: WindowLocation
  og: IOGTags
  twitterCard?: ITwitterCard
}

Seo.defaultProps = {
  lang: `en`,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
