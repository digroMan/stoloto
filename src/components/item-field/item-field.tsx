import React, { useState } from 'react';
import styles from './item-field.module.css';
import clsx from 'clsx';

type TItemFieldProps = {
  number: number;
  handlerClick: (_: number) => void;
  generated: boolean;
};

export const ItemField = ({
  number,
  handlerClick,
  // generated
}: TItemFieldProps): React.JSX.Element => {
  const [selected, setSelected] = useState(false);
  return (
    <span
      className={clsx(styles.item, selected && styles.item_selected)}
      onClick={() => {
        handlerClick(number);
        setSelected(true);
      }}
    >
      {number}
    </span>
  );
};
