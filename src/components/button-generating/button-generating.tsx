import React from 'react';
import styles from './button-generating.module.css';
import clsx from 'clsx';

type TButtonGenerating = {
  blur: boolean;
  handlerClick: () => void;
  imgPath: string;
  alt: string;
};

export const ButtonGenerating = ({
  blur,
  handlerClick,
  imgPath,
  alt,
}: TButtonGenerating): React.JSX.Element => {
  return (
    <button
      type='button'
      className={clsx(styles.button, blur && styles.blur)}
      onClick={handlerClick}
    >
      <img width={30} height={15} className={styles.img} src={imgPath} alt={alt} />
    </button>
  );
};
