import * as React from "react"
import { Link, graphql } from "gatsby"
// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { IPageProps } from "../models/IPageProps"
import { BlogPostBySlugQuery } from "../../graphql-types"
import { AUTHOR_NAME } from "../../constants"

const BlogPostTemplate = ({
  data,
  location,
}: IPageProps<BlogPostBySlugQuery>) => {
  const post = data.markdownRemark
  const { previous, next } = data

  return (
    <Layout location={location}>
      <>
        <Seo
          title={post?.frontmatter?.title || ""}
          location={location}
          meta={{
            title: post?.frontmatter?.meta_title || "",
            description: post?.frontmatter?.meta_description || "",
            keywords: post?.frontmatter?.meta_keywords || "",
          }}
          og={{ type: "article" }}
        />
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post?.frontmatter?.title}</h1>
            <div style={styles.postMeta}>
              <span>Published on {post?.frontmatter?.date || ""}</span>{" "}
              <span>
                by <Link to={"/about"}>{AUTHOR_NAME}</Link>{" "}
              </span>
            </div>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post?.html || "" }}
            itemProp="articleBody"
          />
          <hr />
          {/* TODO: Commented for now */}
          {/* <footer>
            <Bio />
          </footer> */}
        </article>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous?.fields?.slug || ""} rel="prev">
                  ← {previous?.frontmatter?.title || ""}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next?.fields?.slug || ""} rel="next">
                  {next?.frontmatter?.title || ""} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </>
    </Layout>
  )
}

const styles = {
  postMeta: {
    fontSize: "16px",
    marginBottom: "35px",
    borderBottom: "1px solid #1a202c",
    paddingBottom: "10px",
  },
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        excerpt
        meta_title
        meta_description
        meta_keywords
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
