import React from 'react'
import { Star, Key } from "react-feather"
import {FooterItem, Circle} from "../../../styled/repository"

export const RepositoryFooter = ({ repo }) => {

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

