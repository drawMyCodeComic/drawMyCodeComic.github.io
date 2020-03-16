import React from 'react';
import styled from 'styled-components';
import { Text } from "../Text/Text"

const FooterWrapper = styled.footer`
  padding-top: 10px;
  border-top: 1px solid ${({theme}) => theme.colorPalette.lightGray};
`;

export const Footer = () => (
  <FooterWrapper>
    <Text>
      © Powered by <a target="_blank" href="https://instagram.com/toonfranck">@toonfranck</a>
    </Text>
  </FooterWrapper>
)
