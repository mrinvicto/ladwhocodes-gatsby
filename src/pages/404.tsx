import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { IPageProps } from "../models/IPageProps"

const title = "404: Not Found"
const description = ""
const keywords = "not found, ladwhocodes"

const NotFoundPage = ({ location }: IPageProps<any>) => {
  return (
    <Layout location={location}>
      <>
        <Seo
          title={title}
          location={location}
          og={{ type: "website" }}
          meta={{ title, description, keywords, robots: "noindex, follow" }}
        />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </>
    </Layout>
  )
}

export default NotFoundPage
