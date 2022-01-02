/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  AUTHOR_BRIEF_DESCRIPTION,
  AUTHOR_NAME,
  AUTHOR_TWITTER_HANDLE,
} from "../../constants"

const Bio = () => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      (
      <p>
        Written by <strong>{AUTHOR_NAME}</strong>{" "}
        {AUTHOR_BRIEF_DESCRIPTION || null}
        {` `}
        <a href={`https://twitter.com/${AUTHOR_TWITTER_HANDLE}`}>
          You should follow me on Twitter
        </a>
      </p>
      )
    </div>
  )
}

export default Bio
