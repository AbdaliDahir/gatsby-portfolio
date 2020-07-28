import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather'
import {Intro, AboutSection, Avatar, Title, Text, SubTitle, SocialLink} from './style';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile1.jpg" }) {
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
      <Intro>
        <div className="container">
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Front End Developer </SubTitle>
              <div className="center">
                <SocialLink target="_blank"> <Facebook /> </SocialLink>
                <SocialLink target="_blank"> <Twitter /> </SocialLink>
                <SocialLink target="_blank"> <Instagram /> </SocialLink>
                <SocialLink target="_blank"> <Linkedin /> </SocialLink>
              </div>
            </div> 
            <div>
              <Title> Hello, I’m Limbo </Title>
              <Text> I'm a digital product designer & design director hailing from <b className="text-primary">North Africa</b> living in Berlin.
              </Text>
              <Text>  behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </Text>
            </div>
          </AboutSection>
        </div>
      </Intro>
    </>
  )
}


export default About
