import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  BLOG_DESCRIPTION,
  HOMEPAGE_TITLE,
  BLOG_KEYWORDS,
  BLOG_LIST_PAGE_TITLE_PREFIX,
} from "../utils/constants"
import { PageProps } from "../models/PageProps"
import { BlogPostsByPageNumberQuery } from "../../graphql-types"

const RecentArticleListTemplate = ({
  data,
  location,
  pageContext,
}: PageProps<BlogPostsByPageNumberQuery>) => {
  const posts = data?.allMarkdownRemark.edges || []
  const { currentPage, numberOfPages } = pageContext || {}
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const prevPage =
    currentPage - 1 === 1 ? "/" : `/${(currentPage - 1).toString()}`
  const nextPage = `/${(currentPage + 1).toString()}`
  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={`${BLOG_LIST_PAGE_TITLE_PREFIX} - Page ${currentPage}`}
        meta={{
          keywords: BLOG_KEYWORDS,
          description: BLOG_DESCRIPTION,
          type: "website",
        }}
        shouldAppendTitle={true}
      />
      <h1>{pageContext?.category}</h1>
      <ol style={{ listStyle: `none` }}>
        {posts?.map(postEdge => {
          const post = postEdge.node
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

      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </Layout>
  )
}

export default RecentArticleListTemplate

export const pageQuery = graphql`
  query BlogPostsByPageNumber($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            permalink
            excerpt
          }
        }
      }
    }
  }
`
