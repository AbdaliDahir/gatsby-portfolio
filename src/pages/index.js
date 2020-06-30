import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import "normalize.css"
import "./../assets/scss/global.scss"

import About from "../components/about/about"

const IndexPage = () => (
  <Layout> 
    <SEO title="Home" />
    <About /> 
  </Layout>
)

export default IndexPage
