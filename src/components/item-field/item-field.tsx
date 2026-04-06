import { useState } from 'react';
import styles from './item-field.module.css';

type TItemFieldProps = {
  number: number;
  handlerClick: (element: MouseEvent, arrLength: number | undefined) => void;
  generated: Boolean;
};

export const ItemField = ({ number, handlerClick, generated }: TItemFieldProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={styles.button}
      // $selected={generated ? true : selected}
      onClick={(event): void => {
        handlerClick(event?.currentTarget);
        setSelected(true);
      }}
      type='button'
    >
      {number}
    </button>
  );
};
