import * as React from "react"
import { graphql } from "gatsby"
import { ContactUsPageQuery } from "../../graphql-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageProps } from "../models/PageProps"

const ContactUsPage = ({ location }: PageProps<ContactUsPageQuery>) => (
  <Layout location={location}>
    <>
      <Seo
        title="Get in touch with Dinesh Verma"
        location={location}
        shouldAppendTitle={false}
        meta={{
          type: "website",
          title: "Get in touch with Dinesh Verma",
          description:
            "We'd love to hear from you. If you have any feedback or query, please feel free to drop an email to us. Also, connect with on all popular Social Media channels.",
          keywords:
            "Connect with Dinesh Verma, contact LadWhoCodes, LadwhoCodes contact Dinesh Verma, contact Dinesh Verma Dream11, contact Dinesh Verma Sliceit, email Dinesh Verma Github, email Dinesh Verma ZS Associates, email Dinesh Verma LadWhoCodes, email Dinesh Verma Slice",
        }}
      />
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. We are still working on this page.</p>
    </>
  </Layout>
)

export default ContactUsPage

export const query = graphql`
  query ContactUsPage {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
