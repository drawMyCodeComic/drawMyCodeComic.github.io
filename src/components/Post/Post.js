import React from 'react';
import styled from 'styled-components';
import { Link } from '../Link/Link';
import { Title, Text } from '../Text/Text';
import {Row, Col} from 'reactstrap';

export const Article = styled.div`
  margin-bottom: ${({bottom}) => bottom || 10}px;
  .information {
    max-width: 800px;
    display: block;
    margin: auto;
  }
  img {
    max-width: 100%;
  }
  .tags {
    float: right;
    .tag {
      margin-right: 10px;
    }
  }
`;

export const Post = ({post, bottom}) => {
  return (
    <Article bottom={bottom}>
        <Title>{post.frontmatter.title}</Title>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="information">
          <Row>
            <Col>
                <Text color="lightGray" align="left" >
                  {post.frontmatter.date}
                </Text>
            </Col>
            <Col>
              <div className="tags">
                {post.frontmatter.tags &&
                  post.frontmatter.tags.map(tag => (
                    <Text isBlock={false}  className="tag">
                      <Link
                        key={tag}
                        to={'/tags/' + tag.toLowerCase()}
                      >
                        #{tag}
                      </Link>
                    </Text>
                  ))}
              </div>
            </Col>
          </Row>
        </div>
    </Article>
  );
};
