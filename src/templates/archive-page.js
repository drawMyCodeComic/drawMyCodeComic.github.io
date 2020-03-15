import React from 'react';
import {Header} from '../components/Header/Header.js';
import { graphql, useStaticQuery } from 'gatsby';
const ArchivePage = () => {
    const data = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    spoiler
                    tags
                    title
                  }
                }
              }
            }
          }
        `
        )
        return (
            <>
              <Header />
            </>
        )
};

export default ArchivePage;
