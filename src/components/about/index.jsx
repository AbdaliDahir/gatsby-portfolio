import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
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
              <SubTitle> Full-Stack Engineer </SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Abdelali </Title>
              <Text> Full-Stack Engineer from <b className="text-primary lined-link">Morocco</b> </Text>
              <Text>  Four years experienced Software Engineer who combines high-level problem solving skills with good technical experience in Java, Spring framework, React,  Relational Database and multitude of NoSQL DBs. engineering professional with a bachelor degree in Computer Engineering.
              </Text> 
              <Text> working with multi agencies on multi projects allowed me to better understand the expectations of clients and the needs of team members.</Text>
              <Text>  The Only Thing I Know , is that i really know Nothing at all. </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
