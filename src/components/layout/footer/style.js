import styled from 'styled-components';
import variables from '../../../data/variables';

// this is the quote
export const FooterStyle = styled.footer`
	padding-top: 1rem;
  padding-bottom: 8rem;
	z-index: 0;
	position: relative;
	text-align: left;
	@media(min-width: ${variables.breakpointPhone}) {
		background: linear-gradient(to top, #efe9e9, transparent 50%);
	}
	@media(max-width: ${variables.breakpointPhone}) {
		padding-bottom: 2rem;
		padding-left: .5rem;
		padding-right: .5rem;
		text-align: center;
	}
	.quote {
		font-size: 2rem;
		font-family: "GT-Walsheim-Pro-Bold";
		line-height: 1.2;
		color: ${variables.primary};
		@media(max-width: ${variables.breakpointPhone}) {
			font-size: 2rem;
		}
	}
`;

export const SubRight = styled.p`
	font-size: 1rem;
	line-height: 1.8;
	letter-spacing:2px;
	// text-transform: capitalize;
	margin-bottom: 20px;
	font-family: "GT-Walsheim-Pro-Bold";
	
`
export const CopyRight = styled.p`
	font-size: 16px;
	line-height: 1.8;
	letter-spacing:1px;
	// text-transform: capitalize;
`
//left
export const FooterBody = styled.div`
	color: yellow;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: flex-start;
	@media(max-width: ${variables.breakpointPhone}) {
		grid-template-columns: 1fr;
	}
	
`
export const FooterSocialMedia = styled.ul`
	list-style: none;
	padding-left: 0;
	
	@media(max-width: ${variables.breakpointPhone}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	li {
		margin-bottom: 1.5rem;
	}
`
export const MediaLink = styled.a`
	padding: 1rem 0rem;
	padding-bottom: .5rem;
	line-height: 1;
	font-size: 40px;
  	text-transform: capitalize;
  	font-family: "GT-Walsheim-Pro-Bold";
	color: green;
	
`