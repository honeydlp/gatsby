import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1 data-testid="title">Anonymous Arrow Function Two</h1>
    <Link data-testid="link" to="/anonymous-arrow/">
      First page
    </Link>
  </Layout>
)
