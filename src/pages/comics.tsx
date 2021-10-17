import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { graphql } from "gatsby"
import _ from "lodash"
import SEO from "../components/Seo/seo"
import Layout from "../components/Layout/Layout"
import { MarkdownProps } from "../types/schemas"
import { Card } from "../components/Card/Card"
import GatsbyLink from "gatsby-link"

const InphograficPage = props => {
  const inphografics: MarkdownProps[] = _.get(
    props,
    "data.allMarkdownRemark.edges"
  )
  return (
    <Box>
      <Layout>
        <SEO title="Home" />
        <Flex
          justifyContent="space-between"
          flexWrap="wrap"
          w="calc(100% - 300px)"
          m="auto"
          mt="60px"
        >
          {inphografics.map(infographic => (
            <Box mb="40px">
              <GatsbyLink to={infographic.node.frontmatter.path}>
                <Card
                  image={infographic.node.frontmatter.thumbnail?.publicURL}
                  key={infographic.node.id}
                  title={infographic.node.frontmatter.title}
                  isThin
                />
              </GatsbyLink>
            </Box>
          ))}
        </Flex>
      </Layout>
    </Box>
  )
}

export default InphograficPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { internal: {}, frontmatter: { type: { eq: "comic" } } }
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
            thumbnailThin {
              absolutePath
              publicURL
            }
            thumbnail {
              absolutePath
              publicURL
            }
          }
          html
        }
      }
    }
  }
`
