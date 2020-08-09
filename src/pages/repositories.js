import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Repository from "../components/works/github"
import { graphql } from "gatsby"
import {RepoGrid, RepoInfo, Avatar} from "../components/styled/repository"
import {SectionIntro, ContainerLayout} from "../components/common";

const RepositoryPage = ({data}) => { 
  const {
    name,
    avatarUrl,
    repositories,
  } = data.githubData.data.viewer

  return (
    <Layout> 
      <SEO title="Github Repositories" />
      <ContainerLayout>
        <SectionIntro>
          <RepoInfo>
            <Avatar style={{ backgroundImage: `url(${avatarUrl})` }} />
            <h2>{name}</h2>
          </RepoInfo>
          <RepoGrid>
            {repositories.nodes.map((repo, index) => <Repository key={index} repo={repo} />).reverse()}
          </RepoGrid>
        </SectionIntro>
      </ContainerLayout>
    </Layout>
  )
}
export default RepositoryPage

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