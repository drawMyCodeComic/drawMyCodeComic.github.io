import React from 'react';
import { Link, graphql } from 'gatsby';

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        comic view
      </div>
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
