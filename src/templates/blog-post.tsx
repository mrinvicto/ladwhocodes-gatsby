import * as React from "react"
import { Link, graphql } from "gatsby"
import { BlogPostBySlugQuery } from "../../graphql-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageProps } from "../models/PageProps"
import { getCategoryPageRoute } from "../utils/helpers"
import InPostAd from "../components/postAd"

const getAllArticleSections = (articleHTML: string, articleId: string) => {
  const sections = articleHTML.split("<!--ADSENSE-->")
  return sections.map((articleSectionHTML: string, idx: number) => {
    return (
      <React.Fragment>
        <section
          dangerouslySetInnerHTML={{ __html: articleSectionHTML || "" }}
          itemProp="articleBody"
          key={`ARTICLE_SECTION_${idx}_${articleId}`}
        />
        {idx !== sections.length - 1 && <InPostAd />}
      </React.Fragment>
    )
  })
}

const BlogPostTemplate = ({
  data,
  location,
}: PageProps<BlogPostBySlugQuery>) => {
  const post = data?.markdownRemark
  const { previous, next } = data || {}

  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={post?.frontmatter?.meta_title || post?.frontmatter?.title || ""}
        shouldAppendTitle={true}
        meta={{
          title: post?.frontmatter?.meta_title || "",
          description: post?.frontmatter?.meta_description || "",
          keywords: post?.frontmatter?.meta_keywords || "",
          image: post?.frontmatter?.meta_image || "",
          type: "article",
        }}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post?.frontmatter?.title}</h1>
          <div className="post-meta">
            <div className="post-meta-details">{post?.frontmatter?.date}</div>
            <div className="post-categories">
              <span>Posted in:</span>{" "}
              {post?.frontmatter?.categories?.map(category => {
                return (
                  <Link
                    className={`post-category-link post-category-link-${category?.toLocaleLowerCase()}`}
                    to={getCategoryPageRoute(category || "")}
                  >
                    {category}
                  </Link>
                )
              })}
            </div>
          </div>
        </header>
        {getAllArticleSections(post?.html || "", post?.id || "")}
        {/* <section
          dangerouslySetInnerHTML={{ __html: post?.html || "" }}
          itemProp="articleBody"
        /> */}
        <hr />
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
