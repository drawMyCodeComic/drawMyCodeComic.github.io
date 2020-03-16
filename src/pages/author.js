import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import { Text } from '../components/Text/Text';
import {Row, Col, Container} from 'reactstrap';

const avatar = require("../images/avatar.png");
const Wrapper = styled.div`
  height: calc(100vh - 140px);
  .avatar {
    max-width: 100%;
  }
  .container, .row {
    height: 100%;
  }
  .row {
    margin-top: 100px;
  }
  .vertical-center {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .text-container {
    max-width: 800px;
    margin-right: auto;
    display: block;
  }
`;
const AuthorPage = () => (
  <Layout fluid removeNavBar>
    <Wrapper>
      <Container fluid>
        <Row>
          <Col sm={12} md={5}>
            <div className="vertical-center">
              <img className="avatar" src={avatar} alt="author" />
            </div>
          </Col>
          <Col sm={12} md={7}>
            <div className="vertical-center">
              <div className="text-container">
                <Text size="md" align="justify" bottom={50}>
                  Hello my name is Erifranck Nuñez the creator
                  of the draw my code stories, I am a Frontend Developer
                  with 5 years of experience.
                </Text>
                <Text size="md" align="justify" bottom={50}>
                  I love the illustration and the programming world
                  and I want to tell you about my experience and the
                  stories of other friends and colleagues to be fun
                  and learn about this industry.
                </Text>
                <Text size="md" align="justify" bottom={50}>
                  You can find me in my GitHub, Twitter, Instagram
                  and Facebook.
                </Text>
                <Text size="sm" align="justify"> Do you want to tell me your history?</Text>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  </Layout>
);

export default AuthorPage;
