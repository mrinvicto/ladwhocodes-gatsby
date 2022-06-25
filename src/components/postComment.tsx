import React from "react"

export class PostComment extends React.Component {
  // static contextType = ThemeContext

  constructor(props) {
    super(props)
    this.commentBox = React.createRef() // Creates a reference to inject the <script> element
  }
  componentDidMount() {
    // const theme = this.context
    const utteranceTheme = "github-light"
    let scriptEl = document.createElement("script")
    scriptEl.setAttribute("src", "https://utteranc.es/client.js")
    scriptEl.setAttribute("crossorigin", "anonymous")
    scriptEl.setAttribute("async", true)
    scriptEl.setAttribute("repo", "mrinvicto/ladwhocodes-comments")
    scriptEl.setAttribute("issue-term", "pathname")
    scriptEl.setAttribute("theme", utteranceTheme)
    this.commentBox.current.appendChild(scriptEl)
  }

  render() {
    return (
      <div className="comment-box-wrapper container pt-7">
        <h4 className="mb-0">Comments</h4>
        <div ref={this.commentBox} className="comment-box" />
      </div>
    )
  }
}
