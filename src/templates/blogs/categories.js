import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { Calendar, Clock } from 'react-feather'
import Img from "gatsby-image"
import CategoriesTags from '../../components/CategoriesTags/categoriesTags';
import {ContainerLayout, WorkPost, Intro, SubTitle, Title, Text, HeaderIntro, SubText, SmallText, UnderLink, ReadMore} from "../../components/common"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Categories = ({ data }) => {
  const { edges} = data.allMarkdownRemark
  // const tagHeader = `${totalCount} post${
  //   totalCount === 1 ? "" : "s"
  // } tagged with "${category}"`

  return (
    <Layout> 
      <SEO title="Blog Home Page" />
      <Intro>
        <ContainerLayout>

          <SubTitle>
            Articles
          </SubTitle>
          <HeaderIntro>
            <SubText>
              Articles on front-end design engineering, focused on HTML, CSS, SVG, accessiblity, and everything in between, with practical tips from real projects. Included here are links to articles published on magazines.
            </SubText>
            <CategoriesTags /> 
          </HeaderIntro>

          <ContainerLayout className="wrapper">
            {edges.map(({ node }) => {
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
                      Image Credits : 
                      <UnderLink href={node.frontmatter.imageCredit} target="_blank" title="image credit">
                        {node.frontmatter.imageCredit}
                      </UnderLink>
                    </SmallText>
                  </div>
                  
                  <div className="content">
                    <header>
                      <SmallText> 
                        <span className="align-middle">{node.frontmatter.categories.map((item, index) => (
                          <Link to={`/${item}`} key={index}>
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
                        <span className="align-middle"> date published : {node.frontmatter.date} </span>
                      </SmallText>
                      <SmallText> 
                        <Clock className="align-middle text-primary" width="18" height="18" /> 
                        <span className="align-middle"> read time : {node.frontmatter.time} </span>
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
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
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