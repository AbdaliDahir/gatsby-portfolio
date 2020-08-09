import React from "react" 
import {RepoContent} from "../../styled/repository"

import {RepositoryHeader, RepositoryFooter, RepositoryDescription} from './repositoryLayout/index'

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