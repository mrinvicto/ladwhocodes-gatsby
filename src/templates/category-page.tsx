import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { CATEGORY_DETAILS } from "../utils/constants"
import { PageProps } from "../models/PageProps"
import { CategoryPageByTypeQuery } from "../../graphql-types"

const CategoryPageTemplate = ({
  data,
  location,
  pageContext,
}: PageProps<CategoryPageByTypeQuery>) => {
  const posts = data?.allMarkdownRemark.nodes || []
  const categoryDetails = CATEGORY_DETAILS[pageContext?.category?.toLowerCase()]
  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={categoryDetails.title}
        description={categoryDetails.description}
        meta={{
          keywords: categoryDetails.keywords,
          description: categoryDetails.description,
        }}
      />
      <h1>{pageContext?.category}</h1>
      <ol style={{ listStyle: `none` }}>
        {posts?.map(post => {
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
                      __html: post?.frontmatter?.description || "",
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default CategoryPageTemplate

export const pageQuery = graphql`
  query CategoryPageByType($category: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          permalink
        }
      }
    }
  }
`
