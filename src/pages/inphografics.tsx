import React from "react"
import { Box } from "@chakra-ui/react"
import { graphql } from "gatsby"
import _ from "lodash"

const InphograficPage = props => {
  const inphografics = _.get(props, "data.allMarkdownRemark.edges")
  return <Box></Box>
}

export default InphograficPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { internal: {}, frontmatter: { type: { in: "inphografic" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            spoiler
            tags
            title
            path
            date
          }
          html
        }
      }
    }
  }
`
