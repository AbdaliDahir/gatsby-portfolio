import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { useStaticQuery, Link, graphql } from "gatsby"
import {Tag} from '../common'


const CategoriesTags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
  <div>
    <div>
      <div>
        {data.allMarkdownRemark.group.map(tag => (
          <Tag as={Link} key={tag.fieldValue} to={`/${kebabCase(tag.fieldValue)}/`} activeClassName="active">
            <span>{tag.fieldValue} {tag.totalCount} </span>
          </Tag>
        ))}
      </div>
    </div>
  </div>
)}

CategoriesTags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoriesTags