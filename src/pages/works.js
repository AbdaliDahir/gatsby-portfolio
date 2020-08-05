import React from "react"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import Repository from "./../components/works/github"
import { graphql } from "gatsby"

import "./../assets/scss/global.scss"
import {RepoGrid, RepoInfo} from "../components/styled/repository"
import SectionIntro from "../components/common/section";

const WorksPage = ({data}) => { 
  const {
    name,
    avatarUrl,
    repositories,
  } = data.githubData.data.viewer

  return (
    <Layout> 
      <SEO title="Home" />
      <div className="container">
        <SectionIntro>
          <RepoInfo>
            <img src={avatarUrl} alt="repo Avatar" />
            <h4>{name}</h4>
          </RepoInfo>
          <RepoGrid>
            {repositories.nodes.map(repo => <Repository key={repo.name} repo={repo} />).reverse()}
          </RepoGrid>
        </SectionIntro>
      </div>
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