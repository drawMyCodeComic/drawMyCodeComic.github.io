import styled from 'styled-components';

export const Text = styled.span`
  font-size: ${({theme, size}) => theme.font.size[size || 'xs']};
  text-align: ${({align}) => align || 'center'};
  margin-bottom: ${({bottom}) => bottom || 10}px;
  display: block;
`

export const Title = styled.h1`
  font-size: ${({theme}) => theme.font.size.xlg};
  text-align: ${({align}) => align || 'center'};
  margin-bottom: ${({bottom}) => bottom || 10}px;
`

export const SubTitle = styled.h2`
  font-size: ${({theme}) => theme.font.size.lg};
  text-align: ${({align}) => align || 'center'};
  margin-bottom: ${({bottom}) => bottom || 10}px;
`
