import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import { Field } from '../field';
import { LOSING_PHRASE, WINNING_PHRASE } from '../../utils/constants';
import { useSelectFields, useShowResult } from '../../hooks';
import { getFieldProps } from './app.props';
import { ButtonGenerating } from '../button-generating';
import { NumberFieldsProvider } from '../../contexts';

export function App(): React.JSX.Element {
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
    <NumberFieldsProvider>
      <div className={styles.container}>
        <div className={styles.ticket}>
          <hgroup className={styles.hgroup}>
            <h2 className={styles.title}>Билет 1</h2>
            <ButtonGenerating
              imgPath={'magic-stick.svg'}
              alt={'Icon'}
              blur={iconBlur}
              handlerClick={generatedRandomSelect}
            />
          </hgroup>
          {showPrize ? (
            <h3 className={styles.congratulation}>{WINNING_PHRASE}</h3>
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
              {losingGame && <h3 className={styles.losing}>{LOSING_PHRASE}</h3>}
              <button
                className={styles.result}
                disabled={!activateButton}
                type='button'
                onClick={showResult}
              >
                Показать результат
              </button>
            </div>
          )}
        </div>
      </div>
    </NumberFieldsProvider>
  );
}
