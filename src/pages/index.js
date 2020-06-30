<<<<<<< HEAD
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
=======
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
>>>>>>> 48e138f2d4bc40adcf9d5c0d67948f44dbe9089b
