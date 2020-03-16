import React from 'react';
import styled from 'styled-components';
import {urls} from '../../constants/landingUrls';
import {socialNetworks} from '../../constants/socialNetworks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(${(theme) => theme.colorPalette.darkBlue}, 0.2);
  .crossIcon {
    position: absolute;
    left: 40px;
    top: 40px;
  }
`;

export const FixedMenu = (props) => {
  return props.open  ? (
    <Wrapper>
      <FontAwesomeIcon
        icon={faCross}
        clasName="crossIcon"
        onClick={() => props.onClose(false)}
      />
    </Wrapper>
  ) : null;
};
