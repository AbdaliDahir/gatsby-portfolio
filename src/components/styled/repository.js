import styled from "styled-components";
import colors from '../../data/colors';

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`
export const RepoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
  img {
    width: 100px;
    height: 100px;
    border-radius: .5rem;
    border: 10px solid #fff;
    box-shadow: 0 0 20px 10px rgb(27 26 26 / 10%);
    margin-right: 1rem
  }
`

export const RepoContent = styled.div`
  border-radius: .5rem;
  border: 1px solid #e1e4e8;
  margin-bottom: 2rem;
  padding: 1rem;
  font-size: 16;
  transition: all 200ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 36px 25px rgb(0 0 0 / 3%);
    h2 a {
      color: ${colors.primary};
    }
  }
`
export const Title = styled.h2`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 1.4rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
`
export const RepoHead = styled.div`
  display: flex; 
  justify-content: space-between; 
  font-size: 14;
`
export const Text = styled.p`
  color: rgb(25 27 29);
  margin-bottom: 1rem;
  margin-top: .25rem;
  font-size: 1rem;
  text-transform: capitalize;
`
export const FooterItem = styled.span`
  margin-right: .89rem;
  font-size: .9rem;
  color: #242525;
  font-family: "GT-Walsheim-Pro-Medium";
  vertical-align: middle;
  > * {
    vertical-align: middle;
  }
  > svg {
    width: 16px;
    height: 16px;
    &.star {
      fill: #FBC02D;
      stroke: #FFC107;
    }
  }
`
export const Circle = styled.span`
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  width: 10px;
  position: relative;
  vertical-align: initial;
`
