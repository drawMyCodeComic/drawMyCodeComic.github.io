import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const query = graphql`
query {
  markdownRemark(frontmatter: {title: {eq: "About"}}) {
    frontmatter {
      title
    }
    html
  }
}
`;

const AboutPage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const post = data.markdownRemark;
        return (
            <>
                <div className="article">
                  <article dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </>
        );
      }}
    />
  );
};

export default AboutPage;
