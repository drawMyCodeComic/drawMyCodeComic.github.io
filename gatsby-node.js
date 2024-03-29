const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const comicPost = path.resolve("./src/templates/comic-post.js")
    const blogTags = path.resolve("./src/templates/blog-tags.js")

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
              filter: { frontmatter: { title: { ne: "About" } } }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                    lan
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: comicPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
              locale: post.node.frontmatter.lan
            },
          })
        })

        // Tag pages:
        let tags = []
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })
        tags = _.uniq(tags)

        tags.forEach(tag => {
          createPage({
            path: `/tags/${tag.toLowerCase()}/`,
            component: blogTags,
            context: {
              tag,
              locale: post.node.frontmatter.lan
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
