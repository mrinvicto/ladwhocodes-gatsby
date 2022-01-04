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
  AUTHOR_NAME,
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
              <li className="articleContainer" key={post?.fields?.slug}>
                <article
                  style={styles.postArticle}
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
                    <div style={styles.postMeta}>
                      <span>Published on {post?.frontmatter?.date || ""}</span>{" "}
                      <span>
                        by <Link to={"/about"}>{AUTHOR_NAME}</Link>{" "}
                      </span>
                    </div>
                  </header>
                  <section style={styles.postSection}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post?.frontmatter?.excerpt || "",
                      }}
                      itemProp="description"
                    />
                  </section>
                  <Link
                    style={styles.readMoreBtn}
                    to={post?.fields?.slug || ""}
                    itemProp="url"
                  >
                    Read More
                  </Link>
                </article>
              </li>
            )
          })}
        </ol>
      </>
    </Layout>
  )
}

const styles = {
  readMoreBtn: {
    background: "#f5f5f5",
    padding: "15px 20px",
  },
  postSection: {
    marginBottom: "35px",
  },
  postArticle: {
    marginBottom: "32px",
  },
  postMeta: {
    fontSize: "16px",
    marginBottom: "35px",
    borderBottom: "1px solid #1a202c",
    paddingBottom: "10px",
  },
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
          excerpt
        }
      }
    }
  }
`
