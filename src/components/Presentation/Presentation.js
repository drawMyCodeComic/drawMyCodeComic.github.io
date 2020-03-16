import React from 'react';
import {Button} from '../Button/Button';
import {Link} from '../Link/Link';
import styled from 'styled-components';

const LogoBig = require( '../../images/LogoBig.svg' );

const Wrapper = styled.div`
  .logo {
    margin: auto;
    display: block;
    margin-bottom: 150px;
  }
  .start-button {
    display: block;
    margin: auto;
  }
`;

export const Presentation = () => (
  <Wrapper>
    <img
      className="logo"
      src={LogoBig}
      width={800}
      alt="Draw my codDraw my code"
    />
    <Link to="/episodes">
      <Button width="300px" className="start-button" >
        Start Reading
      </Button>
    </Link>
  </Wrapper>
);
