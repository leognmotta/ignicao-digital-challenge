import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Learn"
      description="Website for Ignição Digital"
      meta={["lorem", "test"]}
    />
    <h1>About US</h1>
    <p>Some text here</p>
  </Layout>
)

export default IndexPage
