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
  text-align: left;
  img[src$="imgresponsive"] {
    max-width:80%;
  }
  table th {
      background: #e5e5e5;
  }
  table th, table td {
      border: 1px solid;
      padding: 9px;
  }
  ul {
    line-height: 29px;
    li u {
      color: #18b31e;
      font-size: 1.1rem;
    }
  }
  code {
    background: #f1f1f1;
    display: block;
    padding: 14px;
    font-size: 0.9rem;
    color: #000;
    border-bottom: 3px solid #e5e5e5;
    border-radius: 5px;
    hyphens: none;
    line-height: 1.5;
    overflow-x: auto;
    padding: 1rem 2rem;
    white-space: pre;
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
    font-size: 1rem;
    font-family: "GT-Walsheim-Pro-Regular";
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
