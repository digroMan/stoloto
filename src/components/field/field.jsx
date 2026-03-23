import { ItemField } from '../item-field';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FieldContainer, FieldTitle, FieldDescription, FieldWrapper } from './style';

export const Field = ({
  numbers,
  text,
  handlerClick,
  quantity,
  storageField,
  filledField,
  blockRandomGen,
}) => {
  const [blur, setBlur] = useState(false);

  const addNumberArr = (element) => {
    if (storageField.length === 0) blockRandomGen(true);
    handlerClick((preArr) => [...preArr, parseInt(element.textContent)]);
    if (storageField.length === quantity - 1) {
      setBlur(true);
      filledField(true);
    }
  };

  return (
    <FieldContainer>
      <FieldTitle>{text.title}</FieldTitle>
      <FieldDescription>{text.description}</FieldDescription>
      <FieldWrapper $filter={storageField.length === quantity ? true : blur}>
        {numbers.map((number, index) => (
          <ItemField
            key={index}
            number={number}
            eventClick={(e) => addNumberArr(e.target)}
            generated={storageField.some((item) => item === number)}
          />
        ))}
      </FieldWrapper>
    </FieldContainer>
  );
};

Field.propTypes = {
  numbers: PropTypes.array,
  text: PropTypes.object,
  handlerClick: PropTypes.func,
  quantity: PropTypes.number,
  storageField: PropTypes.array,
  filledField: PropTypes.func,
  blockRandomGen: PropTypes.func,
};
