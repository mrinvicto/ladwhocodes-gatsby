import { AUTHOR_TWITTER_HANDLE, SITE_TITLE } from "../../../constants"

export interface IMetaTags {
  title: string
  description: string
  keywords: string
  robots?: string
}

export interface IOGTags {
  title?: string
  description?: string
  url?: string
  siteName?: string
  image?: string
  type?: string
}

export interface ITwitterCard {
  creator?: string
  site?: string
}

export const getCombinedMetaTags = (
  meta: IMetaTags,
  og?: IOGTags,
  twitterCards?: ITwitterCard
): any[] => {
  const metaTags: any[] = [
    {
      name: "title",
      content: meta.title,
    },
    {
      name: `description`,
      content: meta.description,
    },
    {
      name: `keywords`,
      content: meta.keywords,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: twitterCards?.creator || AUTHOR_TWITTER_HANDLE,
    },
    {
      name: `twitter:title`,
      content: og?.title || meta.title,
    },
    {
      name: `twitter:description`,
      content: og?.description || meta.description,
    },
    {
      property: `og:title`,
      content: og?.title || meta.title,
    },
    {
      property: `og:description`,
      content: og?.description || meta.description,
    },
    {
      property: `og:type`,
      content: og?.type || "article",
    },
    {
      property: `og:site_name`,
      content: og?.siteName || SITE_TITLE,
    },
    {
      property: `og:url`,
      content: og?.url,
    },
  ]

  if (meta.robots) {
    metaTags.push({ name: "robots", content: meta.robots })
  }

  // {
  //   name: `twitter:site`,
  //   content: SITE_TWITTER_HANDLE,
  // },
  // if (twitterCards) {
  //   metaTags = [
  //     ...metaTags,
  //     ...[

  //       //TODO: LadWhoCode's handle

  //     ],
  //   ]
  // }

  return metaTags
}
