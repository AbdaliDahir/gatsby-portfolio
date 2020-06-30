import React from 'react';
import styled from 'styled-components';
import colors from '../../../data/colors.js';

const FooterStyle = styled.footer`
	background: linear-gradient(to top, #efe9e9, transparent 50%);
	padding-top: 1rem;
    padding-bottom: 8rem;

    h4 {
    	font-size: 4rem;
    	font-weight: 600;
    	text-align: left;
    	line-height: 1.2;
    	color: ${colors.primary}
    }
`;

const Footer = () => {

	return (
		<>
			<FooterStyle>
				<div className="container">
					<div class="row">
						<div className="col-lg-6 offset-5">
							<h4 className="text-primary"> Ready to take the next step and work together? </h4>
						</div>
					</div>
				</div>
			</FooterStyle>
		</>
	)
}

export default Footer;