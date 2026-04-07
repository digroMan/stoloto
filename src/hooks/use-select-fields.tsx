import React, { useState } from 'react';
import { NUMBERS_FIRST_FIELD, NUMBERS_SECOND_FIELD } from '../utils/constants';
import { randomlyGeneratedArr } from '../utils/helpers';

type TUseSelectFieldsProps = {
  setIconBlur: React.Dispatch<React.SetStateAction<boolean>>;
  setFilledFieldFirst: React.Dispatch<React.SetStateAction<boolean>>;
  setFilledFieldSecond: React.Dispatch<React.SetStateAction<boolean>>;
};

type TUseSelectFieldsResult = {
  selectFirstField: number[];
  selectSecondField: number[];
  setSelectFirstField: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectSecondField: React.Dispatch<React.SetStateAction<number[]>>;
  generatedRandomSelect: () => void;
};

export const useSelectFields = ({
  setIconBlur,
  setFilledFieldFirst,
  setFilledFieldSecond,
}: TUseSelectFieldsProps): TUseSelectFieldsResult => {
  const [selectFirstField, setSelectFirstField] = useState<number[]>([]);
  const [selectSecondField, setSelectSecondField] = useState<number[]>([]);

  const generatedRandomSelect = (): void => {
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
