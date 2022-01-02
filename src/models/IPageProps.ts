import { WindowLocation } from "@reach/router"

export interface IPageProps<T> {
  data: T
  location: WindowLocation
}
