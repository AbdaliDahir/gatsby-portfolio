import Img from "gatsby-image"
import styled from 'styled-components';
import colors from '../../data/colors.js';

export const Intro = styled.div`
      padding: 8rem 0 4rem 0;
`

export const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  grid-gap: 10rem;
`

export const Avatar =styled(Img)`
  border-radius: 5px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
`
export const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 600;
`
export const Text = styled.p`
  font-size: 1.2rem;
    line-height: 2;
    color: #9a9797;
    text-transform: capitalize;
    a {
      color: #3F51B5;
      text-decoration: underline;
    }
`
export const SubTitle = styled.h2`
    font-size: 1.8rem;
    margin-top: 41px;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    word-spacing: 8px;
    font-weight: 900;
`
export const SocialLink = styled.a`
	border-radius: 5px;
  margin: 5px;
  display: inline-block;
  padding: 5px 10px;
  cursor: pointer;
  transition: background 400ms ease-in-out;
  &:hover {
    color: ${colors.primary};
  }
`