import styled from "styled-components";

export const Intro = styled.div`
  padding: 8rem 0 4rem 0;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
`

export const ArticlePost = styled.article`
  margin-bottom: 5rem;
  padding-bottom: 1rem;
  max-width: 60rem;
  margin: auto;
  text-align: center;
  img[src$="imgresponsive"] {
    max-width:80%;
  }
`
export const SmallText = styled.small`
    font-size: .89rem;
    padding-right: 10px;
    font-family: "GT-Walsheim-Pro-Regular";
    > span {
      padding-left: 5px;
    }
`
export const ArticleBody = styled.div `
  margin-top: 5rem;
  p {
    font-size: 1.5rem;
    font-family: "GT-Walsheim-Pro-Medium";
  }
`

export const NaviagtionList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  list-style: none;
  padding: 0;
  border-top: 4px solid #ff2d2d;
  border-bottom: 4px solid #ff2d2d;
`
export const NaviagtionLi = styled.li`
  padding: 2rem 0;
  &:last-child {
    text-align: right;
  }
  a {
    font-size: 1.3rem;
    font-family: "GT-Walsheim-Pro-Medium";
  }
`