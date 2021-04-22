import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { Calendar } from 'react-feather'
import Img from "gatsby-image"
import { ContainerLayout, WorkPost, Intro, SubTitle, Title, Text, HeaderIntro, SubText, SmallText, UnderLink, ReadMore } from "../components/common"
import CategoriesTags from '../components/CategoriesTags/categoriesTags';
import kebabCase from "lodash/kebabCase"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <Layout>
        <SEO title="Blog Home Page" />
        <Intro>
          <ContainerLayout>

            <SubTitle>
              Projects
            </SubTitle>
            <HeaderIntro>
              <SubText>
                Below is a collection of my most recent projects from newest to oldest. Each project comes with a link to the github repository and the live site. For a complete list please follow this link: <a href="https://github.com/aharri64"> My Github Repository </a>
              </SubText>
              <CategoriesTags />
            </HeaderIntro>

            <ContainerLayout className="wrapper">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <WorkPost key={node.fields.slug}>
                    <div className="media">
                      <div className="image-wrapper">
                        <Link to={node.fields.slug}>
                          <Img fluid={node.frontmatter.image.childImageSharp.fluid} title="work title" />
                        </Link>
                      </div>
                      <SmallText>
                        <UnderLink href={node.frontmatter.imageCredit} target="_blank" title="image credit">
                          {node.frontmatter.siteName}
                        </UnderLink>
                      </SmallText>

                    </div>

                    <div className="content">
                      <header>
                        <SmallText>
                          <span className="align-middle">{node.frontmatter.categories.map((item, index) => (
                            <Link to={`/${kebabCase(item)}`} key={index}>
                              <span className="align-middle text-primary text-underline">#{item}</span>
                              {node.frontmatter.categories.length !== index + 1 ? <span className="align-middle text-primary"> , </span> : ""}
                            </Link>
                          ))} </span>
                        </SmallText>
                        <Title>
                          <Link className="text-primary" style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                          </Link>
                        </Title>
                        <SmallText>
                          <Calendar className="align-middle text-primary" width="18" height="18" />
                          <span className="align-middle"> Creation Date : {node.frontmatter.date} </span>
                        </SmallText>

                      </header>
                      <Text
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <Link to={node.fields.slug}>
                        <ReadMore className="lined-link"> read more &#8594; </ReadMore>
                      </Link>
                    </div>
                  </WorkPost>
                )
              })}
            </ContainerLayout>
          </ContainerLayout>
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
            imageCredit
            siteName
            description
            
          }
        }
      }
    }
  }
`