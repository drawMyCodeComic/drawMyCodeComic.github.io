import styled from 'styled-components';
import proptypes from 'prop-types';

export const Paper = styled.div`
  box-shadow: ${({theme, deph}) => theme.dephs[deph || 0]};
  border: ${({borderSize, borderColor}) => `${borderSize || 0}px solid ${borderColor || 'FFF'} ` };
`;

Paper.propType = {
  deph: proptypes.number,
  borderSize: proptypes.number,
  borderColor: proptypes.string,
}
