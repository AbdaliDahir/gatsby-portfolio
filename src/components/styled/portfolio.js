import styled from 'styled-components';
import colors from '../../data/colors';

export const WorkPost = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 5rem;
  > section {
    padding: 2rem 3rem;
  }
  > .image-wrapper {
    max-height: 400px;
    border: 10px solid #fff;
    border-radius: .9rem;
    box-shadow: 0 17px 56px rgba(125,127,129,.17);
    overflow: hidden;
    > div {
      transition: all 800ms ease-in-out;
    }
  }
  &:hover {
    cursor: pointer;
    > .image-wrapper > div {
      transform: scale(1.2) rotate(8deg);
    }
  }
`
export const WorkLayout = styled.div`
  max-width: 80rem;
  margin: auto;
`
export const Tag = styled.span`
  color: #a9aaab;
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: .8em;
  background: rgb(183 181 181 / 15%);
  border-radius: .25rem;
  padding: .5rem 1rem;
  margin-right: 1rem;
  border: 1px solid rgb(0 0 0 / 2%);
`
export const Category = styled.span`
font-family: "GT-Walsheim-Pro-Bold";
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: .8em;
  border-radius: .25rem;
  padding: .5rem 1rem;
  margin-right: 1rem;
  border: 3px solid ${colors.primary};
`