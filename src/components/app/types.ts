import React from 'react';
import { TTextField } from '../../utils/types';

export type TGetFieldProps = {
  fieldType: string;
  handlerClick: React.Dispatch<React.SetStateAction<number[]>>;
  storageField: number[];
  filledField: React.Dispatch<React.SetStateAction<boolean>>;
  blockRandomGen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TReturnFieldProps = {
  numbers: number[];
  text: TTextField;
  quantity: number;
};
