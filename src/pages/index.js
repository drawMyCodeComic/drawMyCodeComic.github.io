import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/seo"
import {Container, Collapse} from 'reactstrap';
import {PostList} from '../components/PostList/PostList';
import {LandingSection} from '../components/LandingSection/LandingSection';
import {Presentation} from '../components/Presentation/Presentation';
import {Title} from '../components/Text/Text';
import {AboutDMC} from '../components/AboutDMC/AboutDMC';
import { Element } from 'react-scroll';
import {urls} from '../constants/landingUrls';
import {Link} from '../components/Link/Link';
import { useMediaQuery } from 'react-responsive';
import _ from 'lodash';

const IndexPage = (props) => {
    const posts = _.get(props, 'data.allMarkdownRemark.edges');
    const isMobile = useMediaQuery({ query: 'screen and (max-width: 800px)' });
    return (
      <Layout>
        <SEO title="Home" />
          <Container fluid="sm">
            <Element name={urls.HOME}>
              <LandingSection center height={800} top={40} bottom={40}>
                <Presentation isMobile={isMobile} />
              </LandingSection>
            </Element>
            <Collapse isOpen={!isMobile}>
                <Element name={urls.EPISODES}>
                  <LandingSection top={100} bottom={100}>
                      <Title bottom={60} >Episodes</Title>
                      <PostList posts={(posts || []).slice(0, 6)} />
                      <Link to="/episodes" size="md" floatRight>
                        More Episodes
                      </Link>
                  </LandingSection>
                </Element>
                <Element name={urls.ABOUT}>
                  <LandingSection center top={100} height={900} bottom={100}>
                    <AboutDMC isMobile={isMobile} />
                  </LandingSection>
                </Element>
            </Collapse>
          </Container>
      </Layout>
    )
}

export default IndexPage

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
