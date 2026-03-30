import './app.css';
import { Icon } from '@components/ticket-icon';
import { TicketNumber } from '@components/ticket-number';
import { WINNING_PHRASE, LOSING_PHRASE } from '@constants';
import styles from './app.module.css';
import magicWand from '@public/magicWand.svg';
import { useEffect, useState } from 'react';
import {
  GameTicket,
  TicketTitle,
  TextСongratulations,
  TextLosing,
  ButtonResult,
} from './style';
import { useShowResult, useSelectFields } from '@hooks';
import { getFieldProps } from './app.props';
import { Field } from '@components/field';

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
    <div className='container-box'>
      <div className={styles.ticket}>
        <div className={styles.ticket_container}>
          <div className={styles.ticket}></div>
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
        </div>
      </div>
    </div>
  );
}
