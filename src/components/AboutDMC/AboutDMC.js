import React from 'react';
import styled from 'styled-components';
import Logo from '../../icons/drawmyCodeLogo.svg';
import {Text} from '../Text/Text';
import {Row, Col} from 'reactstrap';


const Wrapper = styled.div`
`;

export const AboutDMC = () => (
  <Wrapper>
    <Row>
      <Col md={5}>
        <Logo />
      </Col>
      <Col>
        <Text size="md" bottom={100} align="justify">
          The draw my code is a web comic created by @erifranckn
          where you can find histories related with the programmer
          life and experiences, here you can learn about technical
          things or just get fun about this Wonderful job.
        </Text>

        <Text size="md" align="justify" >
          Enjoy this webcomic and if you want to tell me your
          own history please write to this email
          stories@drawmy.codes i want to read it.
        </Text>
      </Col>
    </Row>
  </Wrapper>
);
