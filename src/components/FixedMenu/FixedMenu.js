import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import {urls, AUTHOR} from '../../constants/landingUrls';
import {socialNetworks} from '../../constants/socialNetworks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(40,40,40, 0.5);
  .crossIcon {
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: ${({ theme }) => theme.font.size.sm}
  }
  .menu-container {
    a {
      display: block;
      color: ${({ theme }) => theme.colorPalette.white};
      &:hover {
        color: ${({ theme }) => theme.colorPalette.darkBlue};
      }
    }
  }
`;
const {EPISODES, ABOUT} = urls;
export const FixedMenu = (props) => {
  return props.open  ? (
    <Wrapper>
      <FontAwesomeIcon
        icon={faTimes}
        className="crossIcon"
        onClick={() => props.onClose(false)}
      />
      <div className="menu-container">
        <Link to={EPISODES} >
          Episodes
        </Link>
        <Link to={ABOUT} >
          About
        </Link>
        <Link to={AUTHOR} >
          Author
        </Link>
      </div>
    </Wrapper>
  ) : null;
};
