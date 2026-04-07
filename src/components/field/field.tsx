import React, { useState } from 'react';
import { ItemField } from '../item-field';
import { TFieldProps } from './types';
import styles from './field.module.css';
import clsx from 'clsx';

export const Field = ({
  numbers,
  text,
  handlerClick,
  quantity,
  storageField,
  filledField,
  blockRandomGen,
}: TFieldProps): React.JSX.Element => {
  const [blur, setBlur] = useState(false);

  const addNumberArr = (number: number) => {
    if (storageField?.length === 0) blockRandomGen(true);
    handlerClick((preArr) => [...preArr, number]);
    if (storageField?.length === quantity - 1) {
      setBlur(true);
      filledField(true);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{text.title}</h3>
      <p className={styles.description}>{text.description}</p>
      <ul className={clsx(styles.list, blur && styles.list_blur)}>
        {numbers.map((number, index) => (
          <li key={index}>
            <ItemField
              number={number}
              handlerClick={addNumberArr}
              generated={storageField?.some((item) => item === number)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
