import React from 'react';
import ButtonDefault from '../../common/buttons/button';

import { FooterStyle, FooterBody, SubRight, CopyRight } from './style'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<div className="container">
					<FooterBody>
						<div>
							<h4 className="text-primary"> Ready to take the next step and work together? </h4>
							<ButtonDefault href="mailto:abdali.dahir@gmail.com"> Contact me </ButtonDefault>
						</div>
					</FooterBody>
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