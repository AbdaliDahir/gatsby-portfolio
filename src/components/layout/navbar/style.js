import styled from "styled-components";
import variables from '../../../data/variables';

export const NavbarLogo = styled.div`
  a {
    color: ${variables.black};
    font-size: 2.3rem;
    font-family: "GT-Walsheim-Pro-Bold";
  }
  @media(max-width: ${variables.breakpointPhone}) {
    display: none
  }
`

export const NavbarElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    text-align: center;
    width: 100%;
  }
`

export const NavbarList = styled.ul`
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  > li a {
    font-size: 1.2rem;
    color: #232323;
    padding: .5rem .2rem;
    margin: 0 1rem;
    text-decoration: none;
    vertical-align: middle;
    > svg {
      width: 18px;
      margin-right: 5px;
    }
    span, 
    svg {
      display: block;
      vertical-align: middle;
    }
    @media(max-width: ${variables.breakpointPhone}) {
      font-size: 1rem;
    }
  }
`

