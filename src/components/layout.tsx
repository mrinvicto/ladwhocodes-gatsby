import * as React from "react"
import { Link } from "gatsby"
import { WindowLocation } from "@reach/router"
import { SITE_TITLE } from "../../constants"

const Layout = ({ location, children }: ILayout) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{SITE_TITLE}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {SITE_TITLE}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

interface ILayout {
  location: WindowLocation
  children?: React.ReactElement
}

export default Layout
