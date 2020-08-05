module.exports = {
  SiteTitle: 'Limbo',
  Sitelogo: '#',
  SiteLogoText: 'John Doe',
  SiteAuthor: 'John Doe',
  SiteDescription: 'Front End Developer',
  githubApiToken: '0380ba34b77f9d0a98068c6298d09fb2b61567cb',
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
