  
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import { Calendar, Clock } from 'react-feather'

import "normalize.css"
import "./../assets/scss/global.scss"

import styled from 'styled-components';

const Intro = styled.div`
  padding: 8rem 0 4rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 600;
`

const ArticlePost = styled.article`
  margin-bottom: 5rem;
  padding-bottom: 1rem;
`
const SmallText = styled.small`
    font-size: .89rem;
    padding-right: 10px;
    > span {
      padding-left: 5px;
    }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
const post = data.markdownRemark
const siteTitle = data.site.siteMetadata.title
const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Intro >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <ArticlePost>
                <header>
                  <Title>
                      {post.frontmatter.title}
                  </Title>
                  <SmallText> 
                    <Calendar className="align-middle text-primary" width="18" height="18" /> 
                    <span className="align-middle"> date published : {post.frontmatter.date} </span>
                  </SmallText>
                  <SmallText> 
                    <Clock className="align-middle text-primary" width="18" height="18" /> 
                    <span className="align-middle"> read time : {post.frontmatter.time} </span>
                  </SmallText>
                </header>
                
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
                
              </ArticlePost>

              <nav>
                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  <li>
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Intro>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery2 = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`