import styled from 'styled-components';
import colors from '../../../data/variables';

export const FooterStyle = styled.footer`
	background: linear-gradient(to top, #efe9e9, transparent 50%);
	padding-top: 1rem;
  padding-bottom: 8rem;
	z-index: 0;
	position: relative;
	text-align: left;
	h4 {
		font-size: 4rem;
		font-weight: 600;
		line-height: 1.2;
		color: ${colors.primary}
	}
`;

export const SubRight = styled.h6`
	font-size: 13px;
	font-weight: 300;
	letter-spacing:2px;
	text-transform: capitalize;
	margin-bottom: 20px;
`	
export const CopyRight = styled.p`
	font-size: 11px;
	font-weight: 300;
	letter-spacing:1px;
	text-transform: capitalize;
`
export const FooterBody = styled.div`
	display: grid;
	grid-template-columns 1fr 1fr;
	align-items: center;
`
export const MediaLink = styled.a`
	padding: 1rem 0rem;
	padding-bottom: .5rem;
	line-height: 1;
	font-size: 1rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
	color: ${colors.primary};
`