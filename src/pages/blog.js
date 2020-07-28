import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { Calendar, Clock } from 'react-feather'

import "normalize.css"
import "./../assets/scss/global.scss"

import styled from 'styled-components';

const Intro = styled.div`
  padding: 8rem 0 4rem 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 600;
`
const Text = styled.p`
  font-size: .98rem;
  line-height: 2;
  color: #000000;
  margin-top: 2rem;
`
const SubText = styled.p`
  font-size: 1rem;
  line-height: 2;
  color: #232323;
`
const HeaderIntro = styled.header`
    margin-bottom: 6rem;
    max-width: 800px;
`
const SubTitle = styled.h3`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: bold;
  text-decoration: underline;
`
const ArticlePost = styled.article`
  margin-bottom: 5rem;
  padding-bottom: 1rem;
  &:not(:last-child) {
    border-bottom: 4px solid #000;
  }
`
const SmallText = styled.small`
    font-size: .89rem;
    padding-right: 10px;
    > span {
      padding-left: 5px;
    }
`

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <Layout> 
        <SEO title="Home" />
        <Intro>
          <div className="container">

            {/* Header  */}
            <HeaderIntro>
              <SubTitle className="text-dark">
                Articles
              </SubTitle>
              <SubText>
                Articles on front-end design engineering, focused on HTML, CSS, SVG, accessiblity, and everything in between, with practical tips from real projects. Included here are links to articles published on magazines such as Smashing Magazine, Codrops, A List Apart, and CSS-Tricks, and others.
              </SubText>
            </HeaderIntro>

            <div className="row">
              <div className="col-8">
                {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <ArticlePost key={node.fields.slug}>
                    <header>
                      <Title>
                        <Link className="text-primary" style={{ boxShadow: `none` }} to={node.fields.slug}>
                          {title}
                        </Link>
                      </Title>
                      <SmallText> 
                        <Calendar className="align-middle text-primary" width="18" height="18" /> 
                        <span className="align-middle"> date published : {node.frontmatter.date} </span>
                      </SmallText>
                      <SmallText> 
                        <Clock className="align-middle text-primary" width="18" height="18" /> 
                        <span className="align-middle"> read time : {node.frontmatter.time} </span>
                      </SmallText>
                    </header>
                    <section>
                      <Text
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </ArticlePost>
                )
              })}
              </div>
            </div>
          </div>
        </Intro>
      </Layout>
    </>
  )
}


export default BlogIndex


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            time
            title
            description
          }
        }
      }
    }
  }
`