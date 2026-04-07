import { useState } from 'react';
import styles from './item-field.module.css';

type TItemFieldProps = {
  number: number;
  handlerClick: (number: number) => void;
  generated: Boolean;
};

export const ItemField = ({ number, handlerClick, generated }: TItemFieldProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={styles.button}
      onClick={() => {
        handlerClick(number);
        setSelected(true);
      }}
      type='button'
    >
      {number}
    </button>
  );
};
