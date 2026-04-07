import React, { useState } from 'react';
import { NUMBERS_FIRST_FIELD, NUMBERS_SECOND_FIELD } from '../utils/constants';
import { randomlyGeneratedArr } from '../utils/helpers';

type TUseSelectFields = {
  setIconBlur: React.Dispatch<React.SetStateAction<boolean>>;
  setFilledFieldFirst: React.Dispatch<React.SetStateAction<boolean>>;
  setFilledFieldSecond: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useSelectFields = ({
  setIconBlur,
  setFilledFieldFirst,
  setFilledFieldSecond,
}: TUseSelectFields) => {
  const [selectFirstField, setSelectFirstField] = useState<number[]>([]);
  const [selectSecondField, setSelectSecondField] = useState<number[]>([]);

  const generatedRandomSelect = () => {
    setSelectFirstField(randomlyGeneratedArr(NUMBERS_FIRST_FIELD));
    setSelectSecondField(randomlyGeneratedArr(NUMBERS_SECOND_FIELD));
    setIconBlur(true);

    setFilledFieldFirst(true);
    setFilledFieldSecond(true);
  };

  return {
    selectFirstField,
    selectSecondField,
    setSelectFirstField,
    setSelectSecondField,
    generatedRandomSelect,
  };
};
