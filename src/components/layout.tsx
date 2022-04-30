import * as React from "react"
import { Link } from "gatsby"
import { PageProps } from "../models/PageProps"
import { BLOG_HOME_TITLE } from "../utils/constants"
import { FooterSection } from "./footer"

const Layout = ({ location, children }: PageProps<any>) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const title = BLOG_HOME_TITLE
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h2 className="main-heading">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      </h2>
    )
  }

  return (
    <div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
      </div>
      <FooterSection />
    </div>
  )
}

export default Layout
