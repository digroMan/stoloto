import { useState } from 'react';
import { randomlyGeneratedArr } from '../helpers';
import { NUMBERS_FIRST_FIELD, NUMBERS_SECOND_FIELD } from '../constants';

export const useSelectFields = ({
  setIconBlur,
  setFilledFieldFirst,
  setFilledFieldSecond,
}) => {
  const [selectFirstField, setSelectFirstField] = useState([]);
  const [selectSecondField, setSelectSecondField] = useState([]);

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
