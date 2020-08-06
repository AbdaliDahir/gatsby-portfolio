import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import "./../assets/scss/global.scss"
import {Intro, SubTitle, Title, Text} from "../components/styled/blog"
import {WorkPost, WorkLayout, Tag, Category} from "../components/styled/portfolio"

const WorkIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges

  return (
    <>
      <Layout> 
        <SEO title="Home" />
        <Intro>
          <div className="container">

            <SubTitle className="text-dark">
              Selected Work
            </SubTitle>

            <WorkLayout>
                {works.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <WorkPost key={node.fields.slug}>
                    <div className="image-wrapper">
                      <Img fluid={node.frontmatter.image.childImageSharp.fluid} title="work title" />
                    </div>
                    <section>
                      <header>
                        <Category>{node.frontmatter.category}</Category>
                        <Title>
                          <Link className="text-primary" style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                          </Link>
                        </Title>
                      </header>
                        <Text
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                        <div>
                          {node.frontmatter.tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
                        </div>
                    </section>
                  </WorkPost>
                )
              })}
            </WorkLayout>
          </div>
        </Intro>
      </Layout>
    </>
  )
}

export default WorkIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(works)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            category
            description
          }
        }
      }
    }
  }
`