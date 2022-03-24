import * as React from "react"
import { Link, graphql } from "gatsby"
import { BlogPostBySlugQuery } from "../../graphql-types"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageProps } from "../models/PageProps"

const BlogPostTemplate = ({
  data,
  location,
}: PageProps<BlogPostBySlugQuery>) => {
  const post = data?.markdownRemark
  const { previous, next } = data || {}

  return (
    <Layout location={location}>
      <Seo location={location} title={post?.frontmatter?.title || ""} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1>{post?.frontmatter?.meta_image}</h1>
          <h1 itemProp="headline">{post?.frontmatter?.title}</h1>
          <p>{post?.frontmatter?.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post?.html || "" }}
          itemProp="articleBody"
        />
        <hr />
        <div>
          {post?.frontmatter?.categories?.map(category => {
            return <p>{category}</p>
          })}
        </div>
        <footer>
          <Bio />
        </footer>
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
              <Link to={previous?.frontmatter?.permalink || ""} rel="prev">
                ← {previous?.frontmatter?.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next?.frontmatter?.permalink || ""} rel="next">
                {next?.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        meta_title
        meta_description
        meta_keywords
        meta_robots
        meta_image
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        permalink
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        permalink
      }
    }
  }
`
