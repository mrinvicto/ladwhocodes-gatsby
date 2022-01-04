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
      <h1 style={styles.headline} className="main-heading">
        <Link to="/">{SITE_TITLE}</Link>
      </h1>
    )
  } else {
    header = (
      <h2 style={styles.headline} className="main-heading">
        <Link to="/">{SITE_TITLE}</Link>
      </h2>
    )
  }

  const menuItems = (
    <ol style={styles.menuList}>
      <li style={styles.menuListItem}>
        <Link to={"/about"}>About Us</Link>
      </li>
      <li style={styles.menuListItem}>
        <Link to={"/contact"}>Contact</Link>
      </li>
    </ol>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        {menuItems}
      </header>
      <main className={isRootPath ? "" : "mainWrapper"}>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a rel="nofollow" href="https://www.gatsbyjs.com">
          Gatsby
        </a>
      </footer>
    </div>
  )
}

const styles = {
  headline: {
    flex: 1,
  },
  menuList: {
    listStyle: "none",
    display: "flex",
  },
  menuListItem: {
    marginLeft: "20px",
  },
}

interface ILayout {
  location: WindowLocation
  children?: React.ReactElement
}

export default Layout
