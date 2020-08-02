import React from "react"
// import Octicon, { Law, Star } from "@githubprimer/octicons-react"
import GitHubButton from "react-github-btn"
import { Star, Key } from "react-feather"

const RepositoryHeader = ({ repo }) => {
  return (
    <div
      style={{ display: `flex`, justifyContent: `space-between`, fontSize: 14 }}
    >
      <h3
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          marginBottom: 0,
          fontSize: 20,
        }}
      >
        <a
          href={`https://github.com${repo.resourcePath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
      </h3>
      <GitHubButton
        href={`https://github.com${repo.resourcePath}`}
        data-icon=""
        data-size="large"
        aria-label="Star repo on GitHub"
      >
        Star
      </GitHubButton>
    </div>
  )
}

const FooterItem = ({ children }) => (
  <span style={{ marginRight: 16 }}>{children}</span>
)

const RepositoryFooter = ({ repo }) => {
  // if(repo.languages.edges[0]) {
  //   const language = repo.languages.edges[0].node
  // } else {
  //   const language = { 
  //       "name": "CSS",
  //       "color": "#563d7c" 
  //   }
  // }
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
        <span
          style={{
            borderRadius: `50%`,
            display: `inline-block`,
            height: 12,
            position: `relative`,
            top: 1,
            width: 12,
          }}
        />{" "}
        {/* {language.name} */}
      </FooterItem>
      <FooterItem>
        <Star />
        {repo.stargazers.totalCount}{" "}
      </FooterItem>
      {repo.licenseInfo && (
        <FooterItem>
          <Key /> {repo.licenseInfo.name}
        </FooterItem>
      )}
      <FooterItem>Updated: {updatedAt}</FooterItem>
      {repo.homepageUrl && <FooterItem />}{" "}
    </div>
  )
}

const RepositoryDescription = ({ repo }) => (
  <div style={{ width: `75%` }}>
    <p style={{ color: `#586069`, marginBottom: 0 }}>
      {repo.description}

      {repo.homepageUrl && (
        <>
          {" -"} <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
        </>
      )}
    </p>
  </div>
)

const Repository = ({ repo }) => {
  return (
    <div
      style={{
        borderBottom: `1px solid #e1e4e8`,
        marginBottom: `1rem`,
        padding: `1rem`,
        fontSize: 16,
      }}
    >
      <RepositoryHeader repo={repo} />
      <RepositoryDescription repo={repo} />
      <RepositoryFooter repo={repo} />
    </div>
  )
}

export default Repository