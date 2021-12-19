// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { BLOG_AUTHOR_SOCIAL_HANDLES } from "../utils/constants"
import { toTitleCase } from "../utils/common"

type DataProps = {
  site: {
    buildTime: string
  }
}

const description = "Dinesh Verma is the lad behing LadWhoCodes. "

const socialMediaLinks = () => {
  return Object.keys(BLOG_AUTHOR_SOCIAL_HANDLES).map(socialMediaSite => {
    return (
      <a href={BLOG_AUTHOR_SOCIAL_HANDLES[socialMediaSite]}>
        {toTitleCase(socialMediaSite)}
      </a>
    )
  })
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => (
  <Layout title="Using TypeScript" location={location}>
    <Seo title="Dinesh Verma" description={description} />
    <h1>Dinesh Verma - The LadWhoCodes</h1>
    <p>
      Bonjour! My name is Dinesh Verma and I am the lad behind ladwhocodes.
      LadWhoCodes is my personal blog where I write articles about coding,
      how-to guides, fixes, and stuff that I find interesting.
    </p>
    <p>
      In my 10 years journey of being a coder I have come across many issues and
      bugs, I have spent hours and days studying and researching solutions and
      best practices. Here through my blog, I aim to create a platform where you
      can find new information, interesting facts, and solutions to all your
      queries and optimized bug fixes that I have come across through my course
      of learning. I try to provide an easy-to-follow guide to fixes. I also
      provide crash courses for an in-depth guide on technologies.
    </p>
    <p>
      Currently, I am working as an SDE 3 at DreamX and prior to this, I was
      working as a Senior Software Engineer at ZS Associates. For my projects, I
      work with technologies like NodeJS, ReactJS, GraphQL, Apollo, Flutter,
      Java, C#, MySQL, SQL Server, AWS, Dockers, and the list goes on. I utilize
      my spare time in honing my skills and updating myself with new information
      and technologies. Coming to my gadget, I use my Macbook Pro 2019 as my one
      and only driver. Also, I use Oneplus Nord for my mobile needs.
    </p>
    <p>You can find me on {socialMediaLinks()}.</p>
    {/* <Link to="/">Go back to the homepage</Link> */}
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
