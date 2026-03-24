import {
  NUMBERS_FIRST_FIELD,
  NUMBERS_SECOND_FIELD,
  QUANTITY_FIRST_FIELD,
  QUANTITY_SECOND_FIELD,
  TEXT_FIRST_FIELD,
  TEXT_SECOND_FIELD,
} from '@constants';

export const getFieldProps = ({ fieldType, ...props }) => {
  return {
    numbers: fieldType === 'large' ? NUMBERS_FIRST_FIELD : NUMBERS_SECOND_FIELD,
    text: fieldType === 'large' ? TEXT_FIRST_FIELD : TEXT_SECOND_FIELD,
    quantity: fieldType === 'large' ? QUANTITY_FIRST_FIELD : QUANTITY_SECOND_FIELD,
    ...props,
  };
};
