import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

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
        const post = _.get(data, 'markdownRemark');
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
