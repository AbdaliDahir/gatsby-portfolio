import React from "react"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import Repository from "./../components/works/github"
import { graphql } from "gatsby"
import "./../assets/scss/global.scss"

const WorksPage = ({data}) => {
  console.log(data);
  const {
    name,
    avatarUrl,
    isHireable,
    repositories,
  } = data.githubData.data.viewer

  return (
    <Layout> 
      <SEO title="Home" />
      {repositories.nodes.map(repo => <Repository key={repo.name} repo={repo} />).reverse()}
    </Layout>
  )
}
export default WorksPage

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
          name
          avatarUrl
          isHireable
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
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
      }
    }
  }
`