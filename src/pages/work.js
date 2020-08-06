import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Calendar, Clock } from 'react-feather'

import "./../assets/scss/global.scss"
import {Intro, Title, ArticlePost, SmallText, ArticleBody, NaviagtionList, NaviagtionLi } from '../components/styled/posts'

const portfolioWork = ({data, pageContext, location}) => {
  const work = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={work.frontmatter.title}
        description={work.frontmatter.description || work.excerpt}
      />
      <Intro >
        <div className="container">
          <div>
            <div>
              <ArticlePost>
                <header>
                  <Title>
                    {work.frontmatter.title}
                  </Title>
                  <SmallText> 
                    <Calendar className="align-middle text-primary" width="18" height="18" /> 
                    <span className="align-middle"> date published : {work.frontmatter.date} </span>
                  </SmallText>
                </header>
                
                <ArticleBody dangerouslySetInnerHTML={{ __html: work.html }} />
              </ArticlePost>
            </div>
          </div>
        </div>
      </Intro>
    </Layout>
  )
}

export default portfolioWork;

export const data = graphql`
  query portfolioWorkBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      rawMarkdownBody
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description,
        time,

      }
    }
  }
`