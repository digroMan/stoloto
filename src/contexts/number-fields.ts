import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { TNumberFields } from './types';

export const NumberFieldsContext = createContext<TNumberFields | undefined>(undefined);
export const NumberFieldsSetterContext = createContext<
  Dispatch<SetStateAction<TNumberFields>> | undefined
>(undefined);

export const useNumberFields = () => {
  const ctx = useContext(NumberFieldsContext);
  if (ctx === undefined) throw new Error('NumberFieldsContext === undefined');
  return ctx;
};
export const useSetNumberFields = () => {
  const ctx = useContext(NumberFieldsSetterContext);
  if (ctx === undefined) throw new Error('NumberFieldsSetterContext === undefined');
  return ctx;
};
