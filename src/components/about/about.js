import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';
import colors from '../../data/colors.js';
import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather'

const Intro = styled.div`
      padding: 8rem 0 4rem 0;
`;
const Avatar =styled(Img)`
  border-radius: 5px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
`
const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 600;
`
const Text = styled.p`
  font-size: 1.2rem;
    line-height: 2;
    color: #9a9797;
    text-transform: capitalize;
    a {
      color: #3F51B5;
      text-decoration: underline;
    }
`
const SubTitle = styled.h2`
    font-size: 1.8rem;
    margin-top: 41px;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    word-spacing: 8px;
    font-weight: 900;
`
const Center = styled.div`
	text-align:center;
`

const SocialLink = styled.a`
	border-radius: 5px;
    border: 3px solid ${colors.primary};
    margin: 5px;
    display: inline-block;
    padding: 10px;
    color: #b8b8b8;
    cursor: pointer;
    transition: background 400ms ease-in-out;
    &:hover {
		color: ${colors.inverse};
		background: ${colors.primary};
    }
	> svg {
		width: 20px;
		height: 20px;
	}
`

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
          <div className="row">
            <div className="col-lg-5">
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Front End Developer </SubTitle>

              <Center>
              		<SocialLink target="_blank"> <Facebook /> </SocialLink>
	              <SocialLink target="_blank"> <Twitter /> </SocialLink>
	              <SocialLink target="_blank"> <Instagram /> </SocialLink>
	              <SocialLink target="_blank"> <Linkedin /> </SocialLink>
              </Center>
				
            </div>
            <div className="col-lg-5 offset-1">
              <Title> Hello, I’m Limbo </Title>
              <Text> I'm a digital product designer & design director hailing from <b className="text-primary">North Africa</b> living in Berlin.
              </Text>
              <Text> 
					behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </Text>
            </div>
          </div>
        </div>
      </Intro>
    </>
  )
}


export default About
