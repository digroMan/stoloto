import styled from 'styled-components';
import { media } from '@helpers';

export const Item = styled.li`
  width: ${(props) => (props.$selected ? '10.63vw' : '12.2vw')};
  height: ${(props) => (props.$selected ? '10.63vw' : '12.2vw')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4.38vw;
  border-radius: 1.56vw;
  border: solid 0.31vw #ddd;
  font-weight: 400;
  transform: ${(props) => (props.$selected ? 'scale(.9)' : '')};
  background-color: ${(props) => (props.$selected ? '#FFD205' : '')};

  ${media.desktop(`
    width: 100%;
    height: 100%;
    font-size: 22px;
    border-radius: 14px;
    border-width: 2px;
  `)}
`;
