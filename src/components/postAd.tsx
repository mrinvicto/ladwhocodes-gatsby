import React, { useEffect, useRef } from "react"

const InPostAd = () => {
  const scriptContainer = useRef(null)

  useEffect(() => {
    const scriptString = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6999295635811899"
          crossorigin="anonymous"></script>
      <!-- ladWhoCodes-In-Article -->
      <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-6999295635811899"
          data-ad-slot="2206862299"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>`
    scriptContainer.current.innerHTML = scriptString
    // console.log({ scriptContainer })
  }, [])

  return (
    <div className="post-ad-container" ref={scriptContainer}>
      Hey I am ad
    </div>
  )
}

export default InPostAd
