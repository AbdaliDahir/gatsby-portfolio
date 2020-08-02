import React, { useState } from "react"
// import Octicon, { Law, Star } from "@githubprimer/octicons-react"
import GitHubButton from "react-github-btn"
import { Star, Key } from "react-feather"
import {RepoContent, RepoHead, Title, Text, FooterItem, Circle} from "../../styled/repository"

const RepositoryHeader = ({ repo }) => {
  return (
    <RepoHead>
      <Title>
        <a
          href={`https://github.com${repo.resourcePath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
      </Title>
      <GitHubButton
        href={`https://github.com${repo.resourcePath}`}
        data-icon={Star}
        data-size="large"
        aria-label="Star repo on GitHub"
      >
        Star
      </GitHubButton>
    </RepoHead>
  )
}

const RepositoryFooter = ({ repo }) => {

  const language = repo.languages.edges[0];
  const timeAgo = new Date(repo.updatedA) - new Date()
  const daysAgo = Math.floor(timeAgo / (1000 * 60 * 60 * 24)) // ms to days
  let updatedAt = repo.updatedAt.slice(0, 10)

  if (daysAgo > -21) {
    updatedAt = new Intl.RelativeTimeFormat("en", { style: "narrow" }).format(
      daysAgo,
      "day"
    )
  }
  return (
    <div style={{ color: `#586069`, fontSize: 12 }}>
      <FooterItem>
        <Circle
          style={{
            backgroundColor: language ? language.node.color : '#000'
          }}
        />{" "}
        {language ? language.node.name : 'undifined'}
      </FooterItem>
      <FooterItem>
        <Star className="star" />
        <span> {repo.stargazers.totalCount}{" "} </span>
      </FooterItem>
      {repo.licenseInfo && (
        <FooterItem>
          <Key /> 
          <span> {repo.licenseInfo.name} </span>
        </FooterItem>
      )}
      <FooterItem>Updated: {updatedAt}</FooterItem>
      {repo.homepageUrl && <FooterItem />}{" "}
    </div>
  )
}

const RepositoryDescription = ({ repo }) => (
  <div>
    <Text>
      {repo.description || "this repo didn't have any description"}

      {repo.homepageUrl && (
        <>
          {" -"} <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
        </>
      )}
    </Text>
  </div>
)

const Repository = ({ repo }) => {
  return (
    <RepoContent>
      <RepositoryHeader repo={repo} />
      <RepositoryDescription repo={repo} />
      <RepositoryFooter repo={repo} />
    </RepoContent>
  )
}

export default Repository