module.exports = {
  SiteTitle: 'Abdelali',
  Sitelogo: '#',
  SiteLogoText: 'Abdelali',
  SiteAuthor: 'Abdelali Dahir',
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
    twitter: 'https://twitter.com/AbdaliDahir',
    github: 'https://github.com/AbdaliDahir',
    linkedin: 'https://www.linkedin.com/in/abdelali-dahir-0b5344111/',
  },
  SiteAddress: {
    city: 'Casablanca',
    region: 'CurvaSud',
    country: 'Morocco',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'abdali.dahir@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2020',
};
