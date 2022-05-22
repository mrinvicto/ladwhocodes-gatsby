import React, { useEffect, useRef } from "react"

const InPostAd = () => {
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

  return (
    <div
      className="post-ad-container"
      dangerouslySetInnerHTML={{ __html: scriptString }}
    ></div>
  )
}

export default InPostAd
