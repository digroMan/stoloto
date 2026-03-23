import styled from 'styled-components';

export const IconWrapper = styled.div`
  width: 5.63vw;
  height: 5.63vw;
  pointer-events: ${(props) => (props.$blur ? 'none' : '')};
  opacity: ${(props) => props.$blur && 0.5};
`;
