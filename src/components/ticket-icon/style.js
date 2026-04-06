import styled from 'styled-components';
import { media } from '../../utils/helpers';

export const IconWrapper = styled.div`
  width: 5.63vw;
  height: 5.63vw;
  pointer-events: ${(props) => (props.$blur ? 'none' : '')};
  opacity: ${(props) => props.$blur && 0.5};

  ${media.desktop(`
    width:15px;
    height: 15px;
  `)}
`;
