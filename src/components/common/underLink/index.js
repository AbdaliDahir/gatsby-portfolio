import styled from 'styled-components';

export const UnderLink = styled.a`
  cursor: pointer;
  transition: color 300ms ease-in-out;
  font-family: "GT-Walsheim-Pro-Bold";
  color: #0027ff;
  padding: 0 .5rem;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
`