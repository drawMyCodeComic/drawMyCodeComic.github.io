import React from 'react';
import styled from 'styled-components';
import Logo from '../../icons/drawmyCodeLogo.svg';
import {Text} from '../Text/Text';
import {Row, Col, Collapse} from 'reactstrap';


const Wrapper = styled.div`
  .separation-left {
    padding-left: 40px;
    box-sizing: border-box;
  }
  .logo {
    max-width: 100%;
    margin-bottom: 40px;
  }
`;
const LogoBig = require( '../../images/logoBig.svg' );

export const AboutDMC = (props) => (
  <Wrapper>
    <Row>
      <Col md={5}>
        <Collapse isOpen={!props.isMobile}>
          <Logo className="logo" />
        </Collapse>
        <Collapse isOpen={props.isMobile}>
          <img
            className="logo"
            src={LogoBig}
            width={800}
            alt="Draw my codDraw my code"
          />
        </Collapse>
      </Col>
      <Col className="separation-left" >
        <Text size="md" bottom={60} align="justify">
          The draw my code is a web comic created by @erifranckn
          where you can find histories related with the programmer
          life and experiences, here you can learn about technical
          things or just get fun about this Wonderful job.
        </Text>

        <Text size="md" align="justify" >
          Enjoy this webcomic and if you want to tell me your
          own history please write to this email
          <Text size="md" color="darkgreen" isBlock={false}> stories@drawmy.codes </Text> i want to read it.
        </Text>
      </Col>
    </Row>
  </Wrapper>
);
