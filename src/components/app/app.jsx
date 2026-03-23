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
import {
  FIRST_RANDOM_ARR,
  SECOND_RANDOM_ARR,
  randomlyGeneratedArr,
} from '../../randomArr';

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

function comparingArrays(arrUser, arrGenerated) {
  const newSet = new Set();
  const sharedArr = [...arrUser, ...arrGenerated];
  sharedArr.forEach((num) => newSet.add(num));

  return newSet;
}

function App() {
  const [selectFirstField, setSelectFirstField] = useState([]);
  const [selectSecondField, setSelectSecondField] = useState([]);
  const [filledFieldFirst, setFilledFieldFirst] = useState(false);
  const [filledFieldSecond, setFilledFieldSecond] = useState(false);
  const [activateButton, setActivateButton] = useState(false);
  const [showPrize, setShowPrize] = useState(false);
  const [losingGame, setLosingGame] = useState(false);
  const [iconBlur, setIconBlur] = useState(false);

  useEffect(() => {
    filledFieldFirst && filledFieldSecond && setActivateButton(true);
  }, [filledFieldFirst, filledFieldSecond]);

  function showResult() {
    if (!activateButton) return false;

    const resultFirstField = comparingArrays(selectFirstField, FIRST_RANDOM_ARR);
    const resultSecondField = comparingArrays(selectSecondField, SECOND_RANDOM_ARR);

    if (resultFirstField.size <= 12) return setShowPrize(true);
    if (resultFirstField.size === 13 && resultSecondField.size === 1)
      return setShowPrize(true);
    return setLosingGame(true);
  }

  function clickMagicWand() {
    setSelectFirstField(randomlyGeneratedArr(NUMBERS_FIRST_FIELD));
    setSelectSecondField(randomlyGeneratedArr(NUMBERS_SECOND_FIELD));
    setIconBlur(true);

    setFilledFieldFirst(true);
    setFilledFieldSecond(true);
  }

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
              handlerClick={clickMagicWand}
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
