import React from 'react';
import { graphql, Link } from 'gatsby';

export default class BlogTags extends React.Component {
  render () {
    return (
      <div>
        hello
      </div>
    )
  }
}
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            spoiler
          }
        }
      }
    }
  }
`;
