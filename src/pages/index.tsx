import * as React from "react"
import { Link, graphql } from "gatsby"
// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { IPageProps } from "../models/IPageProps"
import { BlogIndexQuery } from "../../graphql-types"
import {
  SITE_HOME_TITLE,
  SITE_HOME_META_DESCRIPTION,
  SITE_HOME_KEYWORDS,
} from "../../constants"

const homePageMetaTags = {
  description: SITE_HOME_META_DESCRIPTION,
  title: SITE_HOME_TITLE,
  keywords: SITE_HOME_KEYWORDS,
}

const BlogIndex = ({ data, location }: IPageProps<BlogIndexQuery>) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <>
          <Seo
            title={SITE_HOME_TITLE}
            location={location}
            og={{ type: "website" }}
            meta={homePageMetaTags}
          />
          <p>
            No blog posts found. Add markdown posts to "content/blog" (or the
            directory you specified for the "gatsby-source-filesystem" plugin in
            gatsby-config.js).
          </p>
        </>
      </Layout>
    )
  }

  return (
    <Layout location={location}>
      <>
        <Seo
          title={SITE_HOME_TITLE}
          location={location}
          og={{ type: "website" }}
          meta={homePageMetaTags}
        />
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post?.frontmatter?.title || post?.fields?.slug

            return (
              <li key={post?.fields?.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post?.fields?.slug || ""} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post?.frontmatter?.date || ""}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          post?.frontmatter?.description || post.excerpt || "",
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
