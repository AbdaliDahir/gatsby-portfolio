import React from 'react';
import styled from 'styled-components';
import colors from '../../../data/colors.js';
import ButtonDefault from '../../common/buttons/default-button';

const FooterStyle = styled.footer`
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

const LastFooter = styled.div`
		text-align:center;
`
const SubRight = styled.h6`
		font-size: 13px;
		font-weight: 300;
		letter-spacing:2px;
		text-transform: capitalize;
		margin-bottom: 20px;
`	
const CopyRight = styled.p`
		font-size: 11px;
		font-weight: 300;
		letter-spacing:1px;
		text-transform: capitalize;
`

const Footer = () => {

	return (
		<>
			<FooterStyle>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-5">
							<h4 className="text-primary"> Ready to take the next step and work together? </h4>
							
							<ButtonDefault href="mailto:abdali.dahir@gmail.com"> Contact me </ButtonDefault>
								
						</div>
					</div>
					<div className="box">
						<SubRight> Good design doesn't date. Bad design does. </SubRight>
						<CopyRight className="text-dark"> © Copyright 2020 by Abdelali Dahir </CopyRight>
					</div>
				</div>
			</FooterStyle>
		</>
	)
}

export default Footer;