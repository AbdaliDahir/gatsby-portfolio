const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blogs/post.js`)
  const categoriesTemplate = path.resolve("src/templates/blogs/categories.js")
  const portfolioWork = path.resolve(`./src/templates/works/work.js`)
  const blogResult = await graphql(
    `
      {
        blogGroup: allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(blog)/"}}
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                categories
              }
            }
          }
        }
        categoriesGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
      }
    `
  )
  const worksResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(works)/"}}
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (blogResult.errors || worksResult.errors) {
    throw blogResult.errors
  }

  // Create blog posts pages.
  const posts = blogResult.data.blogGroup.edges
  const works = worksResult.data.allMarkdownRemark.edges
  
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })

    // Extract tag data from query
    const categories = blogResult.data.categoriesGroup.group
    // Make tag pages
    categories.forEach(category => {
      createPage({
        path: `/${_.kebabCase(category.fieldValue)}/`,
        component: categoriesTemplate,
        context: {
          category: category.fieldValue,
        },
      })
  })
  })
  works.forEach((work) => {
    createPage({
      path: work.node.fields.slug,
      component: portfolioWork,
      context: {
        slug: work.node.fields.slug
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value,
    })
  }
}