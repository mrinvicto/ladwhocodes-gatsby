import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageProps } from "../models/PageProps"
import { SitemapPageQuery } from "../../graphql-types"
import { Link, graphql } from "gatsby"

const SitemapPage = ({ data, location }: PageProps<SitemapPageQuery>) => {
  const posts = data?.allMarkdownRemark?.nodes || []

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

  return (
    <Layout location={location}>
      <>
        <Seo
          title="Sitemap - A blog about coding and debugging"
          location={location}
          shouldAppendTitle={false}
          meta={{
            type: "website",
            title: "Sitemap - A blog about coding and debugging",
            description:
              "Index of all tutorials and guides published on LadWhoCodes",
            keywords:
              "LadWhoCodes sitemap, LadWhoCodes all articles, LadWhoCodes most recent articles",
          }}
        />
        {getPostsListSection()}
      </>
    </Layout>
  )
}

export default SitemapPage

export const pageQuery = graphql`
  query SitemapPage {
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
