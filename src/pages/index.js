import React from "react"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import About from "../components/about"

const IndexPage = () => (
    <Layout> 
      <SEO title="About me" />
      <About /> 
    </Layout>
  )

export default IndexPage
