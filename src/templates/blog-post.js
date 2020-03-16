import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout/Layout'
import { Post } from '../components/Post/Post'
import SEO from '../components/Seo/Seo'
import { LandingSection } from '../components/LandingSection/LandingSection'
import { ContentNavigator } from '../components/ContentNavigator/ContentNavigator'
import {Container} from 'reactstrap';

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const post = this.props.data.markdownRemark; 
    return (
      <Layout removeNavBar>
        <LandingSection height={800} top={100} bottom={100}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.spoiler}
            slug={post.fields.slug}
          />
          <Container fluid="sm">
            <Post post={post} bottom={40} />
            <ContentNavigator {...this.props.pageContext} />
          </Container>
        </LandingSection>
      </Layout>
    )
  }
}

export default  BlogPostTemplate;

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
`;
