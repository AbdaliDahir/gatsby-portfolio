import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { Calendar, Clock } from 'react-feather'
import Img from "gatsby-image"
import {ContainerLayout, WorkPost, Intro, Title, Text, SmallText, ReadMore, SubTitle, SubText} from "../components/common"
import kebabCase from "lodash/kebabCase"
import BlogHeader from "../components/layout/BlogHeader"
import { GridArticle } from "../components/common/posts/GridPost"

const BlogGrid = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  
  return (
    <>
      <Layout> 
        <SEO title="Blog Home Page" />
        <Intro>
          <ContainerLayout>

            <ContainerLayout className="wrapper">
              <GridArticle>
                {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return ( 
                    <Link key={node.fields.slug} className="content" to={node.fields.slug}>
                      <header>
                        <SmallText className="subText_Tag"> 
                          <span className="align-middle">{node.frontmatter.categories.map((item, index) => (
                            <Link to={`/${kebabCase(item)}`} key={index}>
                              <span className="align-middle text-primary text-underline">#{item}</span>
                              {node.frontmatter.categories.length !== index + 1 ? <span className="align-middle text-primary"> , </span> : ""}
                            </Link>
                          ))} </span>
                        </SmallText>
                        <SubTitle className="text-primary">
                            {title}
                        </SubTitle>
                      </header>
                      <SubText className="blog_desc"
                        dangerouslySetInnerHTML={{
                          __html: `${node.frontmatter.description.length > 100 ? node.frontmatter.description.substring(0, 120) + '...' : node.frontmatter.description}` || node.excerpt,
                        }}
                      />
                    </Link> 
                )
              })}
              </GridArticle>
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default BlogGrid

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
            imageCredit
            description
          }
        }
      }
    }
  }
`
