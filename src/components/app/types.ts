import React from 'react';
import { TTextField } from '../../utils/types';

export type TGetFieldProps = {
  fieldType: string;
  storageField: number[];
  filledField: React.Dispatch<React.SetStateAction<boolean>>;
  blockRandomGen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TReturnFieldProps = {
  numbers: number[];
  text: TTextField;
  quantity: number;
} & TGetFieldProps;
