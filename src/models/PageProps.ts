import { WindowLocation } from "@reach/router"
import React from "react"

export interface PageProps<T> {
  location: WindowLocation
  data?: T
  pageContext?: { [key: string]: any }
  children?: React.ReactNode
}
