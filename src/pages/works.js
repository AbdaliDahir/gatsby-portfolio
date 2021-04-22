import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import IMG_0288 from "../assets/img/IMG_0288.jpg"
import { Tag, ContainerLayout, WorkPost, Category, Intro, SubTitle, Title, Text, ResumeButton } from "../components/common"
import DevIcon from "devicon-react-svg";

const WorkIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges

  return (
    <>
      <Layout>
        <SEO title="Showcases" />
        <Intro>
          <ContainerLayout>
            <p className="brandStatement">I am a self-driven, detail-oriented software engineer with a strong background in marketing and hospitality. I am very well versed in business and technical communications and specialize in effectively connecting the vision of the company and the needs of the user. I thrive in a friendly, yet competitive team-oriented environment where my skills can be challenged and grow. Through my unique career path, I’ve cultivated skills that make me particularly suited for roles where being highly adaptable, motivated, and communicative is key.</p>
            <hr />

            <SubTitle className="text-dark">
              {/* Resume */}
            </SubTitle>
            <ContainerLayout>
              <div className="experience">

                <h1>Experience</h1>
                <hr />

                <strong><h2>Financial Representative</h2></strong>
                <em><h2>Northwestern Mutual  |  Greenwood Village  |  8/2016 - 2/2018</h2></em>
                <ul>
                  <li className="empBullet">Guided and educated 60 clients to discover their tangible goals for retirement and set up meaningful tools and guidance to achieve</li>
                  <li className="empBullet">Awarded the Pacesetter First 40 award by swelling 40 policies within 6 months resulting in $70,000 of premium</li>
                </ul>
                <strong><h2>Field Artillery Section Chief</h2></strong>
                <em><h2>United States Marine Corps  |  8/2005 - 8/2013</h2></em>
                <ul>
                  <li className="empBullet">Took personal responsibility of $4 million of equipment and live ammunition and explosives</li>
                  <li className="empBullet">Commanded gun 3 as Section Chief and trained 15 junior marines on artillery operations, safety, and core values utilizing the Marine Corps Leadership Traits</li>
                </ul>
              </div>
              <div className="education">
                <h1>Education</h1>
                <hr />
                <strong><h2>General Assembly</h2></strong>
                <em><h3>Software Engineering Immersive | Remote | 2021</h3></em>
                <strong><h2>Metropolitan State University of Denver</h2></strong>
                <em><h3>B.S. Marketing | Denver | 2016</h3></em>

                {/* <div className="hardSkills"> */}

                <h1>Hard Skills</h1>
                <hr />
                <div className="content_img">
                  <DevIcon icon="react" width="40" />
                  <div>React</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="nodejs" width="40" />
                  <div>Node.js</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="javascript" width="40" />
                  <div>JavaScript</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="python" width="40" />
                  <div>Python</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="django" width="40" />
                  <div>Django</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="mongodb" width="40" />
                  <div>MongoDB</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="postgresql" width="40" />
                  <div>PostgreSQL</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="git" width="40" />
                  <div>Git</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="jira" width="40" />
                  <div>Jira</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="markdown" width="40" />
                  <div>Markdown</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="jquery" width="40" />
                  <div>jQuery</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="html5" width="40" />
                  <div>HTML5</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="css3" width="40" />
                  <div>CSS3</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="sass" width="40" />
                  <div>Sass</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="bootstrap" width="40" />
                  <div>Bootstrap</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="npm" width="40" />
                  <div>NPM</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="visualstudio" width="40" />
                  <div>Visual Studio Code</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="heroku" width="40" />
                  <div>Heroku</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="illustrator" width="40" />
                  <div>Adobe Illustrator</div>
                </div>
                <div className="content_img">
                  <DevIcon icon="photoshop" width="40" />
                  <div>Adobe Photoshop</div>
                </div>

              </div>

              <img className="meAndKids" src={IMG_0288} alt="My dogs and I" width="700px" />

              <ResumeButton href="resume_amir_harrison.pdf" target="_blank"> Download resume </ResumeButton>
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
      </Layout >
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