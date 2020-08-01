import React from 'react';
import ButtonDefault from '../../common/buttons/button';
import socialMedia from "../../../data/socialMedia.json";

import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink } from './style'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<div className="container">
					<FooterBody>
						<div>
							{socialMedia.map(({ id, name, url }) => (
								<p> <MediaLink className="lined-link" key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
									{name}
								</MediaLink> </p>
							))}
						</div>
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