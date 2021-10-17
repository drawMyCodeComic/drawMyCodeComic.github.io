import React from "react"
import styled from "styled-components"
import { Link } from "../Link/Link"
import { Row, Col } from "reactstrap"
import { Box, Flex, Text, Image } from "@chakra-ui/react"

export const Article = styled.div`
  margin-bottom: ${({ bottom }) => bottom || 10}px;
  .information {
    max-width: 800px;
    display: block;
    margin: auto;
  }
  .tags {
    float: right;
    .tag {
      margin-right: 10px;
    }
  }
`

export const Post = ({ post, bottom }) => {
  return (
    <Article bottom={bottom}>
      <Text fontSize="24px" textAlign="center">
        {post.frontmatter.title}
      </Text>
      <Box>
        <Image
          src={post.frontmatter?.image?.publicURL}
          h="70vh"
          m="auto"
          d="block"
        />
      </Box>
      <div className="information">
        <Row>
          <Col>
            <Text color="lightGray" align="left">
              {post.frontmatter.date}
            </Text>
          </Col>
          <Col>
            <div className="tags">
              {post.frontmatter.tags &&
                post.frontmatter.tags.map(tag => (
                  <Text isBlock={false} className="tag">
                    <Link key={tag} to={"/tags/" + tag.toLowerCase()}>
                      #{tag}
                    </Link>
                  </Text>
                ))}
            </div>
          </Col>
        </Row>
      </div>
    </Article>
  )
}
