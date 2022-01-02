import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { IPageProps } from "../models/IPageProps"

const NotFoundPage = ({ location }: IPageProps<any>) => {
  return (
    <Layout location={location}>
      <>
        <Seo title="404: Not Found" />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </>
    </Layout>
  )
}

export default NotFoundPage
