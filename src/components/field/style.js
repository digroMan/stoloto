import styled from 'styled-components';

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 3.4vw;
  column-gap: 2.5vw;
  margin-bottom: 5.4vw;
`;

const FieldTitle = styled.h3`
  padding-left: 1.5vw;
  font-size: 4.38vw;
  font-weight: 400;
`;

const FieldDescription = styled.h3`
  font-size: 4.38vw;
  font-weight: 300;
`;

const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  opacity: ${(props) => props.$filter && 0.5};
  pointer-events: ${(props) => props.$filter && 'none'};
`;

export { FieldContainer, FieldDescription, FieldTitle, FieldWrapper };
