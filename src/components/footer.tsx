import { Link } from "gatsby"
import React from "react"

export const FooterSection = () => {
  return (
    <footer className="footer-wrapper">
      <div className="global-wrapper footer-inner-wrapper">
        <div className="footer-links">
          <div className="footer-link">
            <Link to={"/about"}>About</Link>
          </div>
          <div className="footer-link">
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className="footer-copyright">
          © 2018 - {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://www.gatsbyjs.com"
            target={"_blank"}
            rel="nofollow noopener noreferrer"
          >
            Gatsby
          </a>
        </div>
      </div>
    </footer>
  )
}
