import { MetaDetails, MetaEntry } from "../models/PageSEOInfo"

export const getCombinedMetaDetails = (meta: MetaDetails): MetaEntry[] => {
  const metaObject: any = { ...meta }
  return Object.keys(meta).map(metaProperty => {
    return {
      name: metaProperty,
      content: metaObject[metaProperty],
    }
  })
}
