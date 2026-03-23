import { useState } from 'react';
import PropTypes from 'prop-types';
import { Item } from './style';

const ItemField = ({ number, eventClick, generated }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Item
      $selected={generated ? true : selected}
      onClick={(e) => {
        eventClick(e);
        setSelected(true);
      }}
    >
      {number}
    </Item>
  );
};

ItemField.propTypes = {
  number: PropTypes.number,
  eventClick: PropTypes.func,
  generated: PropTypes.bool,
};

export default ItemField;
