import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import { Post } from "../components/Post/Post"
import SEO from "../components/Seo/seo"
import { ContentNavigator } from "../components/ContentNavigator/ContentNavigator"
import { Container } from "reactstrap"
import _ from "lodash"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const image = _.get(
      post,
      "frontmatter.featuredImage.childImageSharp.fluid.base64"
    )
    return (
      <Layout>
        <SEO
          image={image}
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <Container fluid="sm">
          <Post post={post} bottom={40} />
          <ContentNavigator {...this.props.pageContext} />
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        path
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
