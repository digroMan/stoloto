import styled, { css } from 'styled-components';

const fontDefault = css`
  font-size: 4.38vw;
  font-weight: 300;
`;

const ContainerBox = styled.div`
  padding-top: 5.31vw;
  padding-left: 3.75vw;
  padding-right: 3.75vw;
`;

const GameTicket = styled.div`
  padding: 4.38vw 2.24vw 7.5vw 3.54vw;
  border-radius: 0.94vw;
  background-color: #fff;
`;

const TicketTitle = styled.div`
  width: 100%;
  padding: 0 1.5vw;
  margin-bottom: 3.75vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextСongratulations = styled.h3`
  margin-bottom: 86.88vw;
  ${fontDefault};
`;

const TextLosing = styled.h4`
  text-align: center;
  margin-bottom: 3vw;
  ${fontDefault};
`;

const ButtonResult = styled.button`
  display: block;
  width: 55.63vw;
  height: 14.14vw;
  margin: auto;
  padding: 0;
  border-radius: 12.5vw;
  border: solid 0.31vw #ddd;
  background: none;
  font-size: 4.38vw;
  color: #000;
  font-weight: 400;
  pointer-events: ${(props) => (props.$active ? '' : 'none')};
`;

export {
  ButtonResult,
  ContainerBox,
  GameTicket,
  TextLosing,
  TextСongratulations,
  TicketTitle,
};
