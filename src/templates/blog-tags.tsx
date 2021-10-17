import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import { PostList } from "../components/PostList/PostList"
import { LandingSection } from "../components/LandingSection/LandingSection"
import { Container } from "reactstrap"
import _ from "lodash"


export default function BlogTags(props) {
  const posts = _.get(props, "data.allMarkdownRemark.edges")
  return (
    <Layout>
      <LandingSection height={800} top={100} bottom={40}>
        <Container fluid="sm">
          <PostList posts={posts || []} />
        </Container>
      </LandingSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String, $locale: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, lan: {eq: $locale} } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            path
            spoiler
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
