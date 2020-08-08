require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  SiteTitle: 'Abdelali',
  Sitelogo: '#',
  SiteLogoText: 'Abdelali',
  SiteAuthor: 'Abdelali Dahir',
  SiteDescription: 'Front End Developer',
  legalName: 'John Doe',
  defaultDescription: 'I’m John and I’m a Software engineer!',
  githubApiToken: process.env.GATSBY_GITHUB_API_TOKEN,
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
  GoogleAnalytics: process.env.GATSBY_GOOGLE_ANALYTICS,
  SiteSocialLinks: {
    twitter: 'http://www.twitter.com/',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/in/',
    instagram: 'https://instagram.com/',
    youtube: 'https://www.youtube.com/'
  },
  SiteAddress: {
    city: 'City',
    region: 'Region',
    country: 'Country',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'email',
    phone: 'phone number',
  },
  SiteCopyright: '2020',
};
