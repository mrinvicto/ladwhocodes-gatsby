import { WindowLocation } from "@reach/router"

export interface PageSEOInfo {
  language?: string
  location: WindowLocation
  title: string
  meta: MetaDetails
  shouldAppendTitle?: boolean
}

export interface MetaDetails {
  description: string
  title?: string
  keywords: string
  robots?: string
  image?: string
  type: string
}

export interface TwitterCardDetails {
  creator?: string
  site?: string
}

export interface MetaEntry {
  name?: string
  property?: string
  content: string
}

export interface LinkProps {
  rel: string
  href: string
}
