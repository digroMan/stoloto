import { Number } from './style';
import PropTypes from 'prop-types';

export const TicketNumber = ({ children }) => {
  return <Number>{children}</Number>;
};

TicketNumber.propTypes = {
  children: PropTypes.string,
};
