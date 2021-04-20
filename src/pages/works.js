import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import IMG_0288 from "../assets/img/IMG_0288.jpg"
import { Tag, ContainerLayout, WorkPost, Category, Intro, SubTitle, Title, Text, ResumeButton } from "../components/common"

const WorkIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges

  return (
    <>
      <Layout>
        <SEO title="Showcases" />
        <Intro>
          <ContainerLayout>

            <ResumeButton href="resume_amir_harrison.pdf" target="_blank"> Download resume </ResumeButton>

            <SubTitle className="text-dark">
              {/* Resume */}
            </SubTitle>
            <ContainerLayout>
              <u><h1>Experience</h1></u>
              <strong><h2>Financial Representative</h2></strong>
              <em><h3>Northwestern Mutual  |  Greenwood Village  |  8/2016 - 2/2018</h3></em>
              <ul>
                <li>Guided and educated 60 clients to discover their tangible goals for retirement and set up meaningful tools and guidance to achieve</li>
                <li>Awarded the Pacesetter First 40 award by swelling 40 policies within 6 months resulting in $70,000 of premium</li>
              </ul>
              <strong><h2>Field Artillery Section Chief</h2></strong>
              <em><h3>United States Marine Corps  |  8/2005 - 8/2013</h3></em>
              <ul>
                <li>Took personal responsibility of $4 million of equipment and live ammunition and explosives</li>
                <li>Commanded gun 3 as Section Chief and trained 15 junior marines on artillery operations, safety, and core values utilizing the Marine Corps Leadership Traits</li>
              </ul>
              <u><h1>Education</h1></u>
              <strong><h2>General Assembly</h2></strong>
              <em><h3>Software Engineering Immersive | Remote |  2021</h3></em>
              <strong><h2>Metropolitan State University of Denver</h2></strong>
              <em><h3>B.S. Marketing | Denver | 2016</h3></em>
              <u><h1>Skills</h1></u>
              <ul>
                <li>Market Research</li>
                <li>Event Marketing</li>
                <li>Social Media Marketing</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Django</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
              <img src={IMG_0288} alt="Logo" width="700px" />
            </ContainerLayout>
            {/* <ContainerLayout className="wrapper">
              {works.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <WorkPost key={node.fields.slug}>
                    <div className="media">
                      <div className="image-wrapper">
                        <Link to={node.fields.slug}>
                          <Img fluid={node.frontmatter.image.childImageSharp.fluid} title="work title" />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <header>
                        <Category>{node.frontmatter.category}</Category>
                        <Title>
                          <Link className="text-primary lined-link" style={{ boxShadow: `none` }} to={node.fields.slug}>
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
                    </div>
                  </WorkPost>
                )
              })}
            </ContainerLayout> */}
          </ContainerLayout>
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