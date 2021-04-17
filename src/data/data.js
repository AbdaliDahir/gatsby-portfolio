module.exports = {
  SiteTitle: 'Amir Harrison',
  Sitelogo: '#',
  SiteLogoText: 'AmirHarrison',
  SiteAuthor: 'Amir Harrison',
  SiteDescription: 'Front End Developer',
  defaultDescription: 'Software engineer!',
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
    // twitter: 'https://twitter.com/AbdaliDahir',
    github: 'https://github.com/aharri64',
    linkedin: 'https://www.linkedin.com/in/amir-scott-harrison/',
  },
  SiteAddress: {
    city: 'Denver',
    region: 'Colorado',
    country: 'USA',
    zipCode: '80237',
  },
  SiteContact: {
    email: 'haveacompletedaygmail.com',
    phone: '7202529844',
  },
  SiteCopyright: '2021',
};
