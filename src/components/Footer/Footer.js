import React from 'react';
import styled from 'styled-components';
import { Text } from "../Text/Text"

const FooterWrapper = styled.footer`
  padding: 20px;
  box-sizing: border-box;
  border-top: 1px solid ${({theme}) => theme.colorPalette.lightGray};
  a {
    color: ${({theme}) => theme.colorPalette.lightGray};
    &:hover {
      color: ${({theme}) => theme.colorPalette.blue};
    }
  }
`;

export const Footer = () => (
  <FooterWrapper>
    <Text size="md" color="lightGray">
      © Powered by <a target="_blank" href="https://instagram.com/toonfranck">@toonfranck</a>
    </Text>
  </FooterWrapper>
)
