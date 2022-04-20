---
title: How to add pagination to a Gatsby blog
date: "2022-04-20T12:35:38.581Z"
categories: ["gatsby"]
excerpt: If you are a new GatsbyJS user, then one of the first things that you must have observed is no option for pagination on homepage. But, the best things about Gatsby is that you can create anything you want. So, follow this tutorial to learn how to add pagination to your Gatsby blog.
permalink: "/gatsby/add-pagination/2/"
# SEO
meta_title: How to add pagination to a Gatsby blog
meta_description: Learn how to add pagination to the homepage of your gatsby blog. GatsbyJS is highly customizable and hence you can write a few lines of code to create paginated blog posts.
meta_keywords: "How to add pagination to gatsby blog post, how to generate paginated blog posts, how to add pagination in gatsby homepage"
meta_image: "/images/og/og_2.png"
---

Adding pagination to your Gatsby blog should be the first thing you should do after moving to Gatsby. By default, homepage pagination is missing in Gatsby starter blog template, but you can easily add pagination to your Gatsby blog.

Moving to Gatsby can come as a shock for a lot of people. You literally have to do everything yourself, if you want to have a descently structured blog. But, again one of the best things about Gatsby is that you can do everything yourself :P.

Additional read: [How to generate category pages in GatsbyJS](/gatsby/generate-category-pages-gatsby-blog/1/)

When I moved to Gatsby I was thrilled by the speed, load time and over all performace. But, at the same time lack of features was a majot turn off. But, as I started building features I got a hang of it and things became pretty simple. I have published a few articles around features that I developed for my blog. You can easily find them here - [Gatsby](/category/gatsby).

Now, lets get back to our original problem of adding pagination to your Gatsby blog. In order to achieve that all you have to do is follow the steps below and you are good to go.

### Steps to add pagination to Gatsby blog

Step 1: Create a template in the templates folder `src/templates` and name the template `recent_articles.js`

```javascript
import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { BlogPostsByPageNumberQuery } from "../../graphql-types"

const RecentArticleListTemplate = ({
  data,
  location,
  pageContext,
}) => {
  const posts = data?.allMarkdownRemark.edges || []
  const { currentPage, numberOfPages } = pageContext || {}
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const prevPage =
    currentPage - 1 === 1 ? "/" : `/${(currentPage - 1).toString()}`
  const nextPage = `/${(currentPage + 1).toString()}`
  return (
    <Layout location={location}>
      {/* Please add you SEO component here */}
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
```

Step 2: Now, update the file `gatsby-node.js` by adding the function `createHomePagination` to it. This function will accept all the posts from your blog and split them across pages. Also, make a call to the function `createHomePagination` immediately after `createPage` function call, passing all the posts to it.

```javascript

// This constant represents the number of posts visible on each page.
const MAX_POSTS_PER_PAGE_HOME = 10

const createHomePagination = (posts, createPage) => {
  const numberOfPages = Math.ceil(posts.length / MAX_POSTS_PER_PAGE_HOME)

  Array.from({ length: numberOfPages }).forEach((_, i) => {
    createPage({
      path: `/${i + 1}`,
      component: path.resolve("./src/templates/recent_articles.js"),
      context: {
        limit: MAX_POSTS_PER_PAGE_HOME,
        skip: i * MAX_POSTS_PER_PAGE_HOME,
        numberOfPages,
        currentPage: i + 1,
      },
    })
  })
}

// Some where in code, make a call to createHomePagination just after createPage function call.
createPage({ ... });
createHomePagination(posts, createPage);
```

Step 3: Once, you are done with both the steps above - open `http://localhost:8000/1` in your browser and if you are able to see top 10 of your posts, the you are good to commit the changes.

Please do let me know if the comments, if you are facing any issue with the implementation of pagination in your gatsby blog.