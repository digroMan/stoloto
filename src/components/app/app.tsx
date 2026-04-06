import './app.css';
import { useEffect, useState } from 'react';
import {
  ContainerBox,
  GameTicket,
  TicketTitle,
  TextСongratulations,
  TextLosing,
  ButtonResult,
} from './style';
import { Icon } from '../ticket-icon';
import { TicketNumber } from '../ticket-number';
import { Field } from '../field';
import { LOSING_PHRASE, WINNING_PHRASE } from '../../utils/constants';
import { useSelectFields, useShowResult } from '../../hooks';
import { getFieldProps } from './app.props';

export function App() {
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
    <ContainerBox>
      <GameTicket>
        <TicketTitle>
          <TicketNumber>Билет 1</TicketNumber>
          <Icon
            imgPath={'/magic-wand.svg'}
            alt={'Icon'}
            blur={iconBlur}
            handlerClick={generatedRandomSelect}
          />
        </TicketTitle>
        {showPrize ? (
          <TextСongratulations>{WINNING_PHRASE}</TextСongratulations>
        ) : (
          <div>
            <Field
              {...getFieldProps({
                fieldType: 'large',
                handlerClick: setSelectFirstField,
                storageField: selectFirstField,
                filledField: setFilledFieldFirst,
                blockRandomGen: setIconBlur,
              })}
            />
            <Field
              {...getFieldProps({
                fieldType: 'small',
                handlerClick: setSelectSecondField,
                storageField: selectSecondField,
                filledField: setFilledFieldSecond,
                blockRandomGen: setIconBlur,
              })}
            />
            {losingGame && <TextLosing>{LOSING_PHRASE}</TextLosing>}
            <ButtonResult $active={activateButton} onClick={showResult}>
              Показать результат
            </ButtonResult>
          </div>
        )}
      </GameTicket>
    </ContainerBox>
  );
}
