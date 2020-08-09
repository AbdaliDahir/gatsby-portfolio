import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GitHub, Twitter, Instagram, Linkedin } from 'react-feather'
import {AboutSection, Avatar, Title, Text, SubTitle, SocialLink} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";
import socialMedia from "../../data/socialMedia.json";

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
              <SubTitle> Front End Developer</SubTitle>
              <div className="center">
                <div>
                  {socialMedia.map(({ id, name, url }) => (
                    <SocialLink key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
                      {name === 'twitter' ? <Twitter /> : ""}
                      {name === 'instagram' ? <Instagram /> : ""}
                      {name === 'linkedin' ? <Linkedin /> : ""}
                      {name === 'github' ? <GitHub /> : ""}
                    </SocialLink>
                  ))}
                </div>
              </div>
            </div> 
            <div>
              <Title> Hello, I’m AbdAli </Title>
              <Text> I'm a digital Front End Developer hailing from <b className="text-primary lined-link">North Africa</b> living in Casablanca. </Text>
              <Text> I love working with modern technologies, building and designing awesome projects. I prefer minimalistic & clean designs with strong user experience.</Text>
              <Text> behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
