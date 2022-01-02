import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { NotFoundQuery } from "../../graphql-types"
import { IPageProps } from "../models/IPageProps"

const NotFoundPage = ({ location }: IPageProps<NotFoundQuery>) => {
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

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`
