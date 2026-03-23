import './app.css';
import FieldContainer from '../field/field';
import Icon from '../ticket-icon/ticket-icon';
import TicketNumber from '../ticket-number/ticket-number';
import {
  NUMBERS_FIRST_FIELD,
  NUMBERS_SECOND_FIELD,
  TEXT_FIRST_FIELD,
  TEXT_SECOND_FIELD,
  QUANTITY_FIRST_FIELD,
  QUANTITY_SECOND_FIELD,
  WINNING_PHRASE,
  LOSING_PHRASE,
} from '../../constants';

import magicWand from '../../../public/magicWand.svg';
import { useEffect, useState } from 'react';
import {
  ContainerBox,
  GameTicket,
  TicketTitle,
  TextСongratulations,
  TextLosing,
  ButtonResult,
} from './style';
import { useShowResult } from '../../hooks/use-show-result';
import { useSelectFields } from '../../hooks/ues-select-fields';

function App() {
  const [filledFieldFirst, setFilledFieldFirst] = useState(false);
  const [filledFieldSecond, setFilledFieldSecond] = useState(false);
  const [activateButton, setActivateButton] = useState(false);
  const [iconBlur, setIconBlur] = useState(false);

  const {
    selectFirstField,
    selectSecondField,
    generatedRandomSelect,
    setSelectFirstField,
    setSelectSecondField,
  } = useSelectFields({
    setIconBlur,
    setFilledFieldFirst,
    setFilledFieldSecond,
  });

  const { showPrize, losingGame, showResult } = useShowResult({
    selectFirstField,
    selectSecondField,
    activateButton,
  });

  useEffect(() => {
    filledFieldFirst && filledFieldSecond && setActivateButton(true);
  }, [filledFieldFirst, filledFieldSecond]);

  return (
    <>
      <ContainerBox>
        <GameTicket>
          <TicketTitle>
            <TicketNumber>Билет 1</TicketNumber>
            <Icon
              imgPath={magicWand}
              alt={'Icon'}
              blur={iconBlur}
              handlerClick={generatedRandomSelect}
            />
          </TicketTitle>
          {showPrize ? (
            <TextСongratulations>{WINNING_PHRASE}</TextСongratulations>
          ) : (
            <div>
              <FieldContainer
                numbers={NUMBERS_FIRST_FIELD}
                text={TEXT_FIRST_FIELD}
                handlerClick={setSelectFirstField}
                quantity={QUANTITY_FIRST_FIELD}
                storageField={selectFirstField}
                filledField={setFilledFieldFirst}
                blockRandomGen={setIconBlur}
              />
              <FieldContainer
                numbers={NUMBERS_SECOND_FIELD}
                text={TEXT_SECOND_FIELD}
                handlerClick={setSelectSecondField}
                quantity={QUANTITY_SECOND_FIELD}
                storageField={selectSecondField}
                filledField={setFilledFieldSecond}
                blockRandomGen={setIconBlur}
              />
              {losingGame && <TextLosing>{LOSING_PHRASE}</TextLosing>}
              <ButtonResult $active={activateButton} onClick={showResult}>
                Показать результат
              </ButtonResult>
            </div>
          )}
        </GameTicket>
      </ContainerBox>
    </>
  );
}

export default App;
