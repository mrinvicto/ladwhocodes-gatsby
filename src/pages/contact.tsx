// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => (
  // TODO: Monika
  <Layout location={location}>
    <>
      <Seo
        title="Contact Us"
        location={location}
        og={{ type: "website" }}
        meta={{ title: "Contact Us", description: "", keywords: "" }}
      />
      <h1>Contact Us</h1>
      <p>We are still working on the contact us page. Please stay tuned.</p>
    </>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
