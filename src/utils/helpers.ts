import { MetaDetails, MetaEntry, LinkProps } from "../models/PageSEOInfo"
import {
  BLOG_HOME_TITLE,
  DEFAULT_OG_SHARE_IMAGE,
  OG_ABOUT_ME_PAGE,
  SITE_TWITTER_HANDLE,
  SITE_URL,
  TWITTER_CREATOR_HANDLE,
} from "./constants"

const getMetaDetailsHelmetTags = (meta: MetaDetails): MetaEntry[] => {
  return [
    {
      name: "description",
      content: meta.description,
    },
    {
      name: "keywords",
      content: meta.keywords,
    },
  ]
}

const getOGMetaHelmetTags = (
  meta: MetaDetails,
  canonicalURL: string
): MetaEntry[] => {
  return [
    {
      property: `og:title`,
      content: meta.title,
    },
    {
      property: `og:image:alt`,
      content: meta.title,
    },
    {
      property: `og:image`,
      content: meta.image || DEFAULT_OG_SHARE_IMAGE,
    },
    {
      property: `og:type`,
      content: meta.type,
    },
    {
      property: `og:description`,
      content: meta.description,
    },
    {
      property: `og:site_name`,
      content: BLOG_HOME_TITLE,
    },
    {
      property: `og:url`,
      content: canonicalURL,
    },
    {
      property: `article:author`,
      content: OG_ABOUT_ME_PAGE,
    },
  ]
}

const getTwitterCardMetaHelmetTags = (meta: MetaDetails): MetaEntry[] => {
  return [
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: TWITTER_CREATOR_HANDLE,
    },
    {
      name: `twitter:title`,
      content: meta.title,
    },
    {
      name: `twitter:description`,
      content: meta.description,
    },
    {
      name: `twitter:site`,
      content: SITE_TWITTER_HANDLE,
    },
    {
      name: `twitter:image`,
      content: meta.image || DEFAULT_OG_SHARE_IMAGE,
    },
    {
      name: `twitter:image:alt`,
      content: meta.title,
    },
  ]
}

export const getCombinedMetaDetails = (
  meta: MetaDetails,
  canonicalURL: string
): MetaEntry[] => {
  return [
    ...getMetaDetailsHelmetTags(meta),
    ...getOGMetaHelmetTags(meta, canonicalURL),
    ...getTwitterCardMetaHelmetTags(meta),
  ]
}

export const getMetaLinks = (link: string): LinkProps[] => {
  return [
    {
      rel: "canonical",
      href: link,
    },
  ]
}

export const getCategoryPageRoute = (category: string) => {
  return `/category/${category}`
}

export const getCompletePageURL = (pathName: string) => {
  return `${SITE_URL}${pathName}`
}
