import styled from 'styled-components';
import variables from '../../../data/variables';

export const Tag = styled.a`
  color: #a9aaab;
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: .8em;
  background: rgb(183 181 181 / 15%);
  border-radius: .25rem;
  padding: .5rem 1rem;
  margin-right: 1rem;
  border: 1px solid rgb(0 0 0 / 2%);
  display: inline-block;
  margin-bottom: 1rem;
  &.active {
    background: ${variables.primary};
    color: ${variables.inverse};
    font-family: "GT-Walsheim-Pro-Bold";
  }
`