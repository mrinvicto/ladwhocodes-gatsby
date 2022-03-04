export interface PageSEOInfo {
  language?: string
  location: WindowLocation
  title: string
  meta: MetaDetails
  // og: OGDetails
  // twitterCard: TwitterCardDetails
}

export interface MetaDetails {
  description: string
  title?: string
  keywords: string
  robots?: string
}

export interface OGDetails {
  title?: string
  description?: string
  url: string
  siteName: string
  image: string
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
