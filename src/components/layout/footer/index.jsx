import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import { ContainerLayout, ButtonDefault } from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}>
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink>
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> Please don't hesitate to reach out. I love connecting with other folks who are passionate about tech.</p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>

						</div>
					</FooterBody>
					<div className="box">
						<SubRight> Work hard, be kind, and amazing things will happen!</SubRight>
						<CopyRight className="text-dark">
							©
							{/* <span> {new Date().getFullYear()}, Built {` `}
								<a href="https://www.gatsbyjs.org">Gatsby</a>{" "}
							</span> */}
							Copyright 2021 by {data.SiteAuthor} |(720) 252-9844 | <a href={'mailto:haveacompleteday@gmail.com'}>haveaceomplteday@gmail.com</a> </CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;