import React from 'react';
import { TTextField } from '../../utils/types';
import { TNumberFields } from '../../contexts/types';

type TFieldType = keyof TNumberFields;

export type TGetFieldProps = {
  fieldType: TFieldType;
  filledField: React.Dispatch<React.SetStateAction<boolean>>;
  blockRandomGen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TReturnFieldProps = {
  numbers: number[];
  text: TTextField;
  quantity: number;
} & TGetFieldProps;
