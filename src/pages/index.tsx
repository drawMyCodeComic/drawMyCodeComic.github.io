import React from "react"
import { Image } from "@chakra-ui/image"
import { Box, Flex } from "@chakra-ui/layout"
import { graphql, PageProps } from "gatsby"
import _ from "lodash"
import { Card } from "../components/Card/Card"
import SEO from "../components/Seo/seo"
import Layout from "../components/Layout/Layout"

const erifranckGuapo = require("../images/assets/erifranck_guapo.png")
const sections = [
  {
    title: "Web Comic",
    img: require("../images/assets/comic_presentation.png"),
    actionLabel: "leer",
  },
  {
    title: "Infografias",
    img: require("../images/assets/inphografic_presentation.png"),
    actionLabel: "leer",
  },
]
const IndexPage: React.FC<PageProps> = props => {
  const posts = _.get(props, "data.allMarkdownRemark.edges")
  return (
    <Layout>
      <SEO title="Home" />
      <Image
        position="absolute"
        zIndex="1"
        left="0px"
        bottom="0px"
        w={{ lg: "800px", md: "500px" }}
        src={erifranckGuapo}
      />
      <Flex justifyContent="flex-end" w="calc(100% - 300px)" m="auto" mt="60px">
        {sections.map(section => (
          <Box ml="100px" key={section.title}>
            <Card
              title={section.title}
              image={section.img}
              actionLabel={section.actionLabel}
              handleClick={() => props.navigate("inphografics/")}
            />
          </Box>
        ))}
      </Flex>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query($locale: String!) {
    site {
      siteMetadata {
        title
        description
        social {
          facebook
          instagram
          twitter
          github
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { lan: { eq: $locale } } }
    ) {
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
`
