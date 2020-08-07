import React from "react"
import Layout from "./../components/layout"
import SEO from "./../components/seo"

import "./../assets/scss/global.scss"

import About from "../components/about"
const IndexPage = () => (
    <Layout> 
      <SEO title="Home" />
      <About /> 
    </Layout>
  )

export default IndexPage
