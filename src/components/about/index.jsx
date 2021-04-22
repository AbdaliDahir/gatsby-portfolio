import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Text, SubTitle } from './style';
import { SectionIntro, ContainerLayout, ResumeButton } from "../common";
import DevIcon from "devicon-react-svg";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle>Full-Stack Developer</SubTitle>
              <div class="devicon" width="50px">
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
            </div>
            <div>
              <Title> Hello, I’m Amir </Title>
              <Text>I'm a former Sommelier and US Marine turned software developer from <b className="text-primary lined-link">Denver, Colorado</b></Text>
              <Text> I love working with modern technologies, as well as building and designing awesome projects. I try to use every opportunity to challenge both hemispheres of my brain and I'm always in a consistent state of self improvement. </Text>
              <Text>I'm a highly positive, focused, and organized person, I bring with me the immense potential to handle challenges and opportunities equally with undying enthusiasm and growth mindset. I am easy to work with, adapt quickly in a team environment, and good at anticipating the needs and concerns in any team collaboration.</Text>
              <ResumeButton href="resume_amir_harrison.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
