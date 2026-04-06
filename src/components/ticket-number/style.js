import styled from 'styled-components';
import { media } from '../../utils/helpers';

export const Number = styled.h4`
  font-size: 5vw;
  line-height: 1;

  ${media.desktop(`
    font-size: 16px;
  `)}
`;
