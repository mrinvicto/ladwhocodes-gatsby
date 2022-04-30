import * as React from "react"
import { Link, graphql } from "gatsby"
import { AboutMePageQuery } from "../../graphql-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageProps } from "../models/PageProps"

const AboutUsPage = ({ location }: PageProps<AboutMePageQuery>) => (
  <Layout location={location}>
    <>
      <Seo
        title="Dinesh Verma - The lad behind LadWhoCodes"
        location={location}
        shouldAppendTitle={false}
        meta={{
          type: "website",
          title: "Dinesh Verma - The lad behind LadWhoCodes",
          description:
            "Dinesh Verma is the lad behind LadWhoCodes. He is currently working as SDE 3 at Slice and has previously worked in top tier companies like Dream11, ZS Associates and TCS.",
          keywords:
            "Dinesh Verma, LadWhoCodes, About Dinesh Verma, Dinesh Verma Dream11, Dinesh Verma Sliceit, Dinesh Verma Github, Dinesh Verma ZS Associates",
        }}
      />
      <div className="blog-page">
        <header>
          <h1>About - Dinesh Verma</h1>
        </header>
        <img
          className={"about-profile-image"}
          src="/images/pages/dinesh_verma.jpeg"
        />
        <p>
          Bonjour! My name is Dinesh Verma and I am the lad behind ladwhocodes.
          LadWhoCodes is my personal blog where I write articles about coding,
          how-to guides, fixes, and stuff that I find interesting.
        </p>
        <p>
          In my 10 years journey of being a coder I have come across many issues
          and bugs, I have spent hours and days studying and researching
          solutions and best practices. Here through my blog, I aim to create a
          platform where you can find new information, interesting facts, and
          solutions to all your queries and optimized bug fixes that I have come
          across through my course of learning. I try to provide an
          easy-to-follow guide to fixes. I also provide crash courses for an
          in-depth guide on technologies.
        </p>
        <p>
          Currently, I am working as an SDE 3 at Slice. For my projects, I work
          with technologies like NodeJS, ReactJS, GraphQL, Apollo,{" "}
          <Link to="/category/flutter">Flutter</Link>, Java, C#, MySQL, SQL
          Server, AWS, Dockers, and the list goes on. I utilize my spare time in
          honing my skills and updating myself with new information and
          technologies. Coming to my gadget, I use my Macbook Pro M1 Pro as my
          primary driver. Also, I use Oneplus Nord for my mobile needs.
        </p>
        <p>
          Feel free to connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/mrinvicto"
            rel="nofollow noopener noreferrer"
            target={"_blank"}
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://instagram.com/ladwhocodes"
            rel="nofollow noopener noreferrer"
            target={"_blank"}
          >
            Instagram
          </a>{" "}
          or{" "}
          <a
            href="https://twitter.com/dineshverma"
            rel="nofollow noopener noreferrer"
            target={"_blank"}
          >
            Twitter
          </a>
          .
        </p>
      </div>
    </>
  </Layout>
)

export default AboutUsPage

export const query = graphql`
  query AboutMePage {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
