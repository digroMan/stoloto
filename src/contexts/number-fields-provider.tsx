import React, { ReactNode, useState } from 'react';
import { NumberFieldsContext, NumberFieldsSetterContext } from './number-fields.js';
import { TNumberFields } from './types.js';

export const NumberFieldsProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const [numberFields, setNumberFields] = useState<TNumberFields>({
    large: [],
    small: [],
  });

  return (
    <NumberFieldsContext.Provider value={numberFields}>
      <NumberFieldsSetterContext.Provider value={setNumberFields}>
        {children}
      </NumberFieldsSetterContext.Provider>
    </NumberFieldsContext.Provider>
  );
};
