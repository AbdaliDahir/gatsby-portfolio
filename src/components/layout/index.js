import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"

import {ContainerLayout} from '../common';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ContainerLayout>
        <Navbar siteTitle={data.site.siteMetadata.title} />
      </ContainerLayout>
      <ContainerLayout>
        <main>{children}</main>
      </ContainerLayout>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
