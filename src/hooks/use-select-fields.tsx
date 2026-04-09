import React, { useState } from 'react';

type TUseSelectFieldsProps = {
  setIconBlur: React.Dispatch<React.SetStateAction<boolean>>;
  setFilledFieldFirst: React.Dispatch<React.SetStateAction<boolean>>;
  setFilledFieldSecond: React.Dispatch<React.SetStateAction<boolean>>;
};

type TUseSelectFieldsResult = {
  selectFirstField: number[];
  selectSecondField: number[];
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
    setIconBlur(true);

    setFilledFieldFirst(true);
    setFilledFieldSecond(true);
  };

  return {
    selectFirstField,
    selectSecondField,
    generatedRandomSelect,
  };
};
