---
title: How to generate category pages in GatsbyJS
date: "2022-03-27T03:53:36.931Z"
categories: ["gatsby"]
excerpt: If you are using Gatsby for your blog, then you must be missing out the functionality to specify categories for your blog posts and the category pages. These category pages not only allow your readers to quickly see all articles belonging to a category, but can also play a pivotal role in gaining SEO benefits.
permalink: "/gatsby/generate-category-pages-gatsby-blog/1/"
# SEO
meta_title: How to generate category pages in Gatsby blog
meta_description: Learn how to add categories to your blog posts and generate category pages in your gatsby blog. These category pages can help your readers and can help you with SEO.
meta_keywords: "How to add categories to gatsby blog post, how to generate category pages in gatsby, how to create category pages in gatsby"
meta_image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK0YI12f57QLvk1sEr1ISNLObUHvX3Ijraq2pHgnpmLsAI0rdemN93xhoXVx-AIBJJ9iNOVQrIxEJTf1h1v8Rb9-73-4tg7JB_i5WMG1K_WzuFgZnm3WjdUw_CCtvwzQDK1b2ctVBO1Dv_SN3QUlR0ec5KozLP0ydfUIIEQxED4D2VZ7iouISnHH_eqQ/s1600/og_1.png
---

I recently moved my blog from Wordpress to Gatsby and the every first thing that I saw was the lack of category pages and the provision to add category to a blog post. So, after a bit of research I found out how to add categories and generate category pages in Gatsby blog.

By adding category to your blog post and creating category pages on your gatsby blog, you give your readers a place to see all articles belonging to that category. This allows you to quickly create article series and publish the list quickly. Also, when used properly these category pages can really help with SEO.

So, without further ado lets quickly jump into the details of how to add categories and generate category pages in gatsby.

**Step 1:** In all your blog articles' markdown files, add the category in the frontmatter section.
```javascript
---
title: Your article title
date: Your article date
categories: ["category_name_1", "category_name_2"]
---
```

**Step 2:** Update the graphql query in the `createPages` function in `gatsby-node.js` file. By doing so you will get access to all the categories of all the blog posts. You can then, use this categories list to generate category pages.

```javascript
`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 1000
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          categories
        }
      }
    }
  }
`
```

**Step 3:** Add logic in the`createPages` function in `gatsby-node.js` file to generate category pages.

```javascript
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              categories
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })

    createCategoryPages(posts, createPage)
  }
}
```

**Step 4:** Add function `createCategoryPages` in the gatsby-node.js file. Just make sure this function is defined before the createPages function.

```javascript
const createCategoryPages = (posts, createPage) => {
  const categoriesFound = []

  posts.forEach(post => {
    post?.frontmatter?.categories?.forEach(cat => {
      if (categoriesFound.indexOf(cat) === -1) {
        categoriesFound.push(cat)
      }
    })
  })

  categoriesFound.forEach(cat => {
    createPage({
      path: `category/${cat.toLowerCase()}`,
      component: path.resolve(`./src/templates/category-page.js`),
      context: {
        category: cat,
      },
    })
  })
}
```

**Step 5:** Now, lets create a category page template. This template will show all the posts belonging to that category as a simple list. Place this template in the location `./src/templates/category-page.js`

```javascript
const CategoryPageTemplate = ({
  data,
  location,
  pageContext,
}) => {
  const posts = data?.allMarkdownRemark.nodes || []
  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={pageContext?.category}
      />
      <h1>{pageContext?.category}</h1>
      <ol style={{ listStyle: `none` }}>
        {posts?.map(post => {
          const title = post?.frontmatter?.title

          return (
            <li key={post?.fields?.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link
                      to={post?.fields?.slug || ""}
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
        }
      }
    }
  }
`
```

**Step 6:** Everything is done now, all you have to do now is restart your application and open the url http://localhost:8000/category/category_name_1. Everything should work just fine.

If you are facing any issue with this tutorial, please let me know in the comments below. Will surely help you in fixing that.