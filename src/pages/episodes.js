import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { PostList } from '../components/PostList/PostList';
import { LandingSection } from '../components/LandingSection/LandingSection';
import { Container } from 'reactstrap';
import SEO from "../components/Seo/seo";
import _ from 'lodash';

const EpisodesPage = (props) => {
  const posts = _.get(props, 'data.allMarkdownRemark.edges');
  return (
    <Layout>
      <SEO title="Author" />
      <LandingSection height={800} top={100} bottom={40}>
        <Container fluid="sm">
          <PostList posts={(posts || []).slice(0, 6)} />
        </Container>
      </LandingSection>
    </Layout>
  )
}

export default EpisodesPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description,
        social {
          facebook,
          instagram,
          twitter,
          github
        }
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {title: {ne: "About"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
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
`;
