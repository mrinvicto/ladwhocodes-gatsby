import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageProps } from "../models/PageProps"
import { NotFoundPageQuery } from "../../graphql-types"
import { NOT_FOUND_DESCRIPTION, NOT_FOUND_PAGE_TITLE } from "../utils/constants"

const NotFoundPage = ({ location }: PageProps<NotFoundPageQuery>) => {
  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={NOT_FOUND_PAGE_TITLE}
        meta={{
          title: NOT_FOUND_PAGE_TITLE,
          description: NOT_FOUND_DESCRIPTION,
          keywords: "",
          type: "website",
        }}
      />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
