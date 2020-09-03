import styled from 'styled-components';
import variables from '../../../data/variables';

export const Intro = styled.div`
  padding: 8rem 0 4rem 0;
  font-family: "GT-Walsheim-Pro-Regular";
`;
export const HeaderIntro = styled.header`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 34px;
  justify-content: space-between;
  margin-bottom: 6rem;
`
export const Title = styled.h1`
  font-family: "GT-Walsheim-Pro-Bold";
  font-size: 2rem;
  text-transform: capitalize;
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 1.5rem;
  }
`
export const SubTitle = styled.h3`
  font-size: 2rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
  text-decoration: underline;
`
export const Text = styled.p`
  font-size: .98rem;
  line-height: 2;
  color: #000000;
  margin-top: 2rem;
  text-align: justify;
  @media(max-width: ${variables.breakpointPhone}) {
    margin-top: 1rem;
    font-size: .8rem;
  }
`
export const SubText = styled.p`
  font-size: 1rem;
  line-height: 2;
  color: #232323;
`

export const SmallText = styled.small`
  font-size: .89rem;
  padding-right: 10px;
  > span {
    padding-left: 5px;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: .6rem;
  }
`

export const WorkPost = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 5rem;
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    border: 10px solid #fff;
    border-radius: .9rem;
    box-shadow: 0 17px 56px rgba(125,127,129,.17);
	}
  > div.content {
    padding: 2rem 3rem;
    @media(max-width: ${variables.breakpointPhone}) {
      padding: 1rem 1rem;
    }
  }
  > div.media {
    text-align: center;
    > .image-wrapper {
      margin-bottom: .5rem;
      max-height: 400px;
      overflow: hidden;
      @media(min-width: ${variables.breakpointPhone}) {
        border: 10px solid #fff;
        border-radius: .9rem;
        box-shadow: 0 17px 56px rgba(125,127,129,.17);
      }
      > a > div {
        transition: all 800ms ease-in-out;
      }
    }
  }
  &:hover {
    cursor: pointer;
    > div.media > .image-wrapper > a > div {
      transform: scale(1.2) rotate(8deg);
    }
  }
`
export const Category = styled.span`
  font-family: "GT-Walsheim-Pro-Bold";
  color: ${variables.primary};
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: .8em;
  border-radius: .25rem;
  padding: .5rem 1rem;
  margin-right: 1rem;
  border: 3px solid ${variables.primary};
`