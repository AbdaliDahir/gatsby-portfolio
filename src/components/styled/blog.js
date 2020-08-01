import styled from 'styled-components';
import colors from '../../data/colors';

export const Intro = styled.div`
  padding: 8rem 0 4rem 0;
  font-family: "GT-Walsheim-Pro-Regular";
`;

export const Title = styled.h1`
  font-family: "GT-Walsheim-Pro-Bold";
  font-size: 2rem;
  text-transform: capitalize;
`
export const Text = styled.p`
  font-size: .98rem;
  line-height: 2;
  color: #000000;
  margin-top: 2rem;
  text-align: justify;
`
export const SubText = styled.p`
  font-size: 1rem;
  line-height: 2;
  color: #232323;
`
export const HeaderIntro = styled.header`
  margin-bottom: 6rem;
  max-width: 800px;
  background: ${colors.primary};
  padding: 3rem 2rem;
  border-radius: .45rem;
  color: #fff;
  box-shadow: 0px 0px 30px 11px rgb(0 0 0 / 8%);
  h3,p {
    color: #fff;
  }
`
export const SubTitle = styled.h3`
  font-size: 2rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
  text-decoration: underline;
`
export const ArticlePost = styled.article`
  margin-bottom: 5rem;
  padding-bottom: 1rem;
`
export const SmallText = styled.small`
  font-size: .89rem;
  padding-right: 10px;
  > span {
    padding-left: 5px;
  }
`
export const PageLAyout = styled.div`
  max-width: 50rem;
`