import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import "normalize.css"
import "./../assets/scss/global.scss"

import Header from "../components/header/header"

const IndexPage = () => (
  <Layout> 
    <SEO title="Home" />
    <Header /> 
  </Layout>
)

export default IndexPage
