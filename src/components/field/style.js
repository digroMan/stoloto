import styled from 'styled-components';
import { media } from '../../utils/helpers';

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 3.4vw;
  column-gap: 2.5vw;
  margin-bottom: 5.4vw;

  ${media.desktop(`
    row-gap: 10px;
    column-gap: 10px;
    margin-bottom: 10px;    
  `)}
`;

const FieldTitle = styled.h3`
  padding-left: 1.5vw;
  font-size: 4.38vw;
  font-weight: 400;

  ${media.desktop(`
    padding-left: 10px;
    font-size: 16px;
  `)}
`;

const FieldDescription = styled.h3`
  font-size: 4.38vw;
  font-weight: 300;

  ${media.desktop(`
    font-size: 16px
  `)}
`;

const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  opacity: ${(props) => props.$filter && 0.5};
  pointer-events: ${(props) => props.$filter && 'none'};

  ${media.desktop(`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 8px;
    justify-items: center;
  `)}
`;

export { FieldContainer, FieldDescription, FieldTitle, FieldWrapper };
