import React from "react"
import { Link } from "gatsby"
import { Col, Row } from "reactstrap"
import { Card, CardImage } from "../Card/Card"
import _ from "lodash"

export const PostList = ({ posts, className }) => (
  <Row className={className}>
    {posts.map(({ node }) => {
      const title = _.get(node, "frontmatter.title") || node.fields.slug
      let featuredImgFluid = _.get(
        node,
        "frontmatter.featuredImage.childImageSharp.fluid"
      )
      return (
        <Col md="6" sm="12" lg="4">
          <Card
            title={title}
            className="post"
            bottom={50}
            key={node.fields.slug}
            tags={node.frontmatter.tags || []}
            date={node.frontmatter.date}
          >
            {featuredImgFluid && (
              <Link to={node.fields.slug}>
                <CardImage fluid={featuredImgFluid} />
              </Link>
            )}
          </Card>
        </Col>
      )
    })}
  </Row>
)
