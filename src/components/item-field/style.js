import styled from 'styled-components';

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
`;
