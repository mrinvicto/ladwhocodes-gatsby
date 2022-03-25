import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  BLOG_DESCRIPTION,
  BLOG_KEYWORDS,
  HOMEPAGE_TITLE,
} from "../utils/constants"
import { PageProps } from "../models/PageProps"
import { HomePageBlogPostsQuery } from "../../graphql-types"

const BlogIndex = ({ data, location }: PageProps<HomePageBlogPostsQuery>) => {
  const posts = data?.allMarkdownRemark?.nodes || []

  const getNoPostsSection = () => {
    return <p>No blog posts found.</p>
  }

  const getPostsListSection = () => {
    return (
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post?.frontmatter?.title

          return (
            <li key={post?.frontmatter?.permalink}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link
                      to={post?.frontmatter?.permalink || ""}
                      itemProp="url"
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post?.frontmatter?.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post?.frontmatter?.excerpt || "",
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    )
  }

  const getPostsSection = () => {
    if (posts.length === 0) {
      return getNoPostsSection()
    } else {
      return getPostsListSection()
    }
  }

  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={HOMEPAGE_TITLE}
        meta={{
          description: BLOG_DESCRIPTION,
          title: HOMEPAGE_TITLE,
          type: "website",
          keywords: BLOG_KEYWORDS,
        }}
      />
      {getPostsSection()}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query HomePageBlogPosts {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          excerpt
          permalink
        }
      }
    }
  }
`
