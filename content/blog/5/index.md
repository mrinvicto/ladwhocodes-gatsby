---
title: Display Adsense Ads Inside Posts On GatsbyJS Blog
date: "2022-06-05T03:50:27.476Z"
categories: ["adsense", "gatsby"]
excerpt: Over the years of running Adsense ads I have realized one thing - you can generate maximum revenue by displaying adsense ads within posts. So, today we will be looking into how can we display Adsense ads inside posts on gatsbyjs blog.
permalink: "/gatsby/adsense-ads-inside-posts/5/"
featured_image: "http://nordthemes.com/the-universe/wp-content/uploads/sites/10/2017/04/sam-williams-4wnrpZtUmqU-unsplash-1300x820.jpg"
# SEO
meta_title: Display Adsense Ads Inside Posts On GatsbyJs Blog
meta_description: To generate maximum revenue from your gatsby blog, start displaying ads inside blog posts.
meta_keywords: "Adsense ads gatsbyjs, Adsense Ads GatbsyJS blog, display adsense ads inside posts"
meta_image: "/images/og/og_2.png"
---

I have been using Adsense to display Ads on my blogs for a really long time now. Over this time I have realized that ads which are displayed inside blog posts give higher revenue than any other ad placement. So, in this post we will looking into how you can display Adsense Ads inside posts on GatsbyJS blog.

The reason why Ads inside Posts give higher revenue is that they blend perfectly with your blog content. Imagine writing a blog article about iPhone 13 and showing an iPhone 13 ad just after a paragraph. People tend to click on such ads more and hence more revenue.

<!--ADSENSE-->

### How to add Adsense ads inside blog posts on Gatsby

1. Edit your post's markdown files and add the below provided HTML comment to your blog posts at places where you want to show the Adsense Ads.

```html
Blog paragraph 1

<!--ADSENSE_AD-->

Blog paragraph 2
```

2. Now, edit the blog-post template component and replace the section where we are dangerously setting inner html with the code below.

```HTML
// Replace this code
<section
  dangerouslySetInnerHTML={{ __html: post?.html || "" }}
  itemProp="articleBody"
/>
```

```javascript
// With this code
{
  getAllArticleSections(post?.html || "", post?.id || "")
}
```

```javascript
// Also create this function in the component
const getAllArticleSections = (articleHTML: string, articleId: string) => {
  const sections = articleHTML.split("<!--ADSENSE_AD-->")
  return sections.map((articleSectionHTML: string, idx: number) => {
    return (
      <React.Fragment>
        <section
          dangerouslySetInnerHTML={{ __html: articleSectionHTML || "" }}
          itemProp="articleBody"
          key={`ARTICLE_SECTION_${idx}_${articleId}`}
        />
        // This is done so that last element is not followed by Ad
        {idx !== sections.length - 1 && <InPostAd />}
      </React.Fragment>
    )
  })
}
```

As you can see in the code above, we are splitting the HTML based on the comment and rendering each section with ad after that.

3. Create `InPostAd` component. This component will hold the Adsense ad code. This this file replace `XXXXXXXXXXXXXXX` with your publisher id.

```javascript
import React from "react"

const InPostAd = () => {
  const scriptString = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX"
  crossorigin="anonymous"></script>
<!-- ladWhoCodes-In-Article -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
  data-ad-slot="2206862299"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>`

  return (
    <div
      className="post-ad-container"
      dangerouslySetInnerHTML={{ __html: scriptString }}
    ></div>
  )
}

export default InPostAd
```

Once everything is stitched together publish your code and wait for 5-10 minutes before ads start showing up. So, this is all you have to do to show Adsense ads inside blog posts on Gatsby. Do let us know if you face any issue.
