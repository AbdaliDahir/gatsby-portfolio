import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { Calendar, Clock, Tag } from 'react-feather'
import Img from "gatsby-image"
import "./../assets/scss/global.scss"
import {Intro, HeaderIntro, SubTitle, SubText, PageLAyout, ArticlePost, Title, Text, SmallText} from "../components/styled/blog"

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

            <PageLAyout>
                {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <ArticlePost key={node.fields.slug}>
                    <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
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
                      <SmallText> 
                        <Tag className="align-middle text-primary" width="18" height="18" /> 
                        <span className="align-middle"> Categories : {node.frontmatter.categories.map((item, index) => (
                          <span key={index}>
                            <span className="align-middle text-primary text-underline">#{item}</span>
                            {node.frontmatter.categories.length !== index + 1 ? <span className="align-middle text-primary"> , </span> : ""}
                          </span>
                        ))} </span>
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
            </PageLAyout>
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
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            categories
            description
          }
        }
      }
    }
  }
`