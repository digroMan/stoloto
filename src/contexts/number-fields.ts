import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { TNumberFields } from './types';

export const NumberFieldsContext = createContext<TNumberFields | undefined>(undefined);
export const NumberFieldsSetterContext = createContext<
  Dispatch<SetStateAction<TNumberFields | undefined>> | undefined
>(undefined);

export const useNumberFields = () => useContext(NumberFieldsContext);
export const useSetNumberFields = () => useContext(NumberFieldsSetterContext);
