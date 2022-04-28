import { CatgeoryPageDetails } from "../models/CatgeoryPageDetails"

// Default site properties
export const SITE_URL = "https://ladwhocodes.com"
export const BLOG_HOME_TITLE = "LadWhoCodes"
export const BLOG_TITLE_SUFFIX = "LadWhoCodes"
export const BLOG_DESCRIPTION =
  "LadWhoCodes is Dinesh Verma's personal blog where we writes about better coding practices, how-to guides, tutorials on latest technologies, and much more."
export const BLOG_KEYWORDS =
  "LadWhoCodes, Dinesh Verma, Dinesh Verma Slice, Dinesh Verma Dream11, Dinesh Verma ZS Associates, Dinesh Verma from LadWhoCodes"
export const HOMEPAGE_TITLE = "LadWhoCodes - A blog about coding and debugging"
export const BLOG_LIST_PAGE_TITLE_PREFIX = "LadWhoCodes"

// 404 Error page
export const NOT_FOUND_PAGE_TITLE = "404 - Page Not Found"
export const NOT_FOUND_DESCRIPTION =
  "Sorry, the page you are looking for is no longer available on LadWhoCodes."

// Twitter social handles
export const TWITTER_CREATOR_HANDLE = "@dineshverma"
export const SITE_TWITTER_HANDLE = "@dineshverma"

// Default OG Tag values
export const DEFAULT_OG_SHARE_IMAGE =
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD7n83jJkBG2P-P6QaDVJ3wOVeHkDKYjet4J2ZL-3hzROrFCOb5jmUFK13n9NYu0ItRn5khcESYzVg_nhTdaE1j6oXQ4wKXYJUpC8cWnZT9dtC2D9KxocjFXK6WcSwOLIpF_ScxpkbHjIbh-gfBkbMhnKQzaonwhUrP6SzofVBlifDF1bt9dgE3beAEQ/s1600/og-default.png"
export const OG_ABOUT_ME_PAGE = "https://ladwhocodes.com/about"

// Category page values
export const CATEGORY_DETAILS: { [key: string]: CatgeoryPageDetails } = {
  java: {
    title: "Java",
    description:
      "Read latest tutorials involving Java which is one of the mosty popular programming languages. Java is used to make Backend applications, mobile apps, desktop apps, games and much more.",
    keywords:
      "Java programming tutorials, Java coding language, Latest Java updates, coding in java, Java tutorials, How to become better programmer with Java",
    excerpt:
      "Java is one of the most popular programming languages in the world.",
  },
  flutter: {
    title: "Flutter",
    description:
      "Read latest tutorials about flutter which in an open source framework developed by Google to make cross platform applications.",
    keywords:
      "Flutter performance optimizations, flutter performance, flutter application development tutorials, how to make apps using flutter",
    excerpt:
      "Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.",
  },
  "react-native": {
    title: "React Native",
    description:
      "Read latest articles about React Native. Learn to create cross platform applications using React Native and how to performance tune the application.",
    keywords:
      "React Native application development tutorials, performance optimizations in React Native, React Native performance optimizations, React Native fixes",
    excerpt:
      "React Native is a cross platform mobile application development framework designed by Facebook.",
  },
  gatsby: {
    title: "GatsbyJS",
    description:
      "Read latest articles about GatsbyJS. Learn how to make the most out of your GatsbyJS blog/application.",
    keywords:
      "GatsbyJS application development tutorials, performance optimizations in GatsbyJS, GatsbyJS performance optimizations, GatsbyJS fixes, GatsbyJS tutorials, Creating blog in GatsbyJS",
    excerpt:
      "GatsbyJS is used to make static websites. I am using it to run my blog.",
  },
  nodejs: {
    title: "NodeJS",
    description:
      "Read latest articles about NodeJS. Learn NodeJS best practice and tips to avoid pitfalls.",
    keywords:
      "NodeJS application development tutorials, performance optimizations in NodeJS, NodeJS performance optimizations, NodeJS fixes, NodeJS tutorials, Creating apis in NodeJS",
    excerpt:
      "NodeJS is used to make static websites. I am using it to run my blog.",
  },
  "vs-code": {
    title: "Visual Studio Code",
    description:
      "Read latest articles about Visual Studio Code. List of best plugin, theme and performance hacks for Visual Studio Code",
    keywords:
      "visual studio code themes, visual studio code hacks, visual studio code performace",
    excerpt:
      "NodeJS is used to make static websites. I am using it to run my blog.",
  },
  customizations: {
    title: "Customizations",
    description: "",
    keywords: "",
    excerpt:
      "NodeJS is used to make static websites. I am using it to run my blog.",
  },
}
