import React from 'react';
import Img from "gatsby-image"
import {Link} from 'gatsby';
import {Col, Row} from 'reactstrap';

export const PostList = ({posts}) => (
    <Row>
      {
        posts.map(({ node }) => {
          const title = _.get(node, 'frontmatter.title') || node.fields.slug;
          let featuredImgFluid = _.get(node, 'frontmatter.featuredImage.childImageSharp.fluid');
          let postTitle;
          let imageQuery = "";
          if(featuredImgFluid) {
            postTitle = "";
            imageQuery = <Link to={node.fields.slug}><Img fluid={featuredImgFluid} /></Link>
          } else {
            postTitle = <h2><Link to={node.fields.slug}>{title}</Link></h2>;
          };
        return (
            <Col md="6" sm="12" lg="4" >
              <div className="post" key={node.fields.slug}>
                {postTitle}
                {imageQuery}
                <p className="subtitle">
                  <br></br>
                  <h5>{node.frontmatter.date}</h5>
                  {node.frontmatter.tags &&
                    node.frontmatter.tags.map(tag => (
                      <span key={tag} className="subtitle-tag">
                        <Link to={'/tags/' + tag.toLowerCase()}>#{tag}</Link>
                      </span>
                    ))}
                </p>
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
                />
              </div>
            </Col>
          );
        })
      }
    </Row>
);
