import React, { useState } from 'react';
import { FieldContainer, FieldTitle, FieldDescription, FieldWrapper } from './style';
import { ItemField } from '../item-field';
import { TFieldProps } from './types';

export const Field = ({
  numbers,
  text,
  handlerClick,
  quantity,
  storageField,
  filledField,
  blockRandomGen,
}: TFieldProps): React.JSX.Element => {
  const [blur, setBlur] = useState(false);

  // const addNumberArr = (element: MouseEvent, arrLength: number | undefined) => {
  //   if (arrLength === 0) blockRandomGen(true);
  //   handlerClick((preArr) => [...preArr, parseInt(element?.target?.textContent)]);
  //   if (arrLength === quantity - 1) {
  //     setBlur(true);
  //     filledField(true);
  //   }
  // };

  const addNumberArr = (arrLength: number | undefined) => (element: MouseEvent) => {
    console.log(arrLength);
    console.log(element);
    return () => {
      console.log(arrLength);
      console.log(element);
      if (arrLength === 0) blockRandomGen(true);
      handlerClick((preArr) => [...preArr, parseInt(element?.target?.textContent)]);
      if (arrLength === quantity - 1) {
        setBlur(true);
        filledField(true);
      }
    };
  };

  return (
    <FieldContainer>
      <FieldTitle>{text.title}</FieldTitle>
      <FieldDescription>{text.description}</FieldDescription>
      <FieldWrapper $filter={storageField?.length === quantity ? true : blur}>
        {numbers.map((number, index) => (
          <li key={index}>
            <ItemField
              number={number}
              handlerClick={addNumberArr(storageField?.length)}
              generated={storageField?.some((item) => item === number)}
            />
          </li>
        ))}
      </FieldWrapper>
    </FieldContainer>
  );
};
