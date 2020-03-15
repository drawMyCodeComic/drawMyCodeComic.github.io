import React from 'react';
import styled from 'styled-components';

const IconButtonStyles = styled.button`
  background: transparent;
  border: none;
  img, svg {
      padding: 10px;
      width: ${({size}) => size || 50}px;
      height: ${({size}) => size || 50}px;
  }
`;
export const IconButton = (props) => {
  return (
    <IconButtonStyles size={props.size}>
      {
        props.children ||
        <img src={props.icon} alt="icon button" />
      }
    </IconButtonStyles>
  );
};
