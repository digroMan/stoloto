import React, { useEffect, useState } from 'react';
import { ItemField } from '../item-field';
import styles from './field.module.css';
import clsx from 'clsx';
import { TReturnFieldProps } from '../app/types';
import { useNumberFields, useSetNumberFields } from '../../contexts';

export const Field = ({
  numbers,
  text,
  fieldType,
  quantity,
  filledField,
  blockRandomGen,
}: TReturnFieldProps): React.JSX.Element => {
  const [blur, setBlur] = useState(false);
  const setNumberFields = useSetNumberFields();
  const numberFields = useNumberFields();

  const addNumberArr = (number: number): void => {
    if (numberFields[fieldType].length === 0) blockRandomGen(true);

    setNumberFields((preState) => ({
      ...preState,
      [fieldType]: [...preState[fieldType], number],
    }));

    if (numberFields[fieldType].length === quantity - 1) {
      setBlur(true);
      filledField(true);
    }
  };

  useEffect(() => {
    console.log(numberFields);
  }, [numberFields]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{text.title}</h3>
      <p className={styles.description}>{text.description}</p>
      <ul
        className={clsx(
          styles.list,
          blur && styles.list_blur,
          quantity === 1 && styles.list_small
        )}
      >
        {numbers.map((number, index) => (
          <li key={index}>
            <ItemField
              number={number}
              handlerClick={addNumberArr}
              generated={numberFields[fieldType].some((item) => item === number)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
