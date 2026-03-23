import { Number } from './style';
import PropTypes from 'prop-types';

const TicketNumber = ({ children }) => {
  return <Number>{children}</Number>;
};

TicketNumber.propTypes = {
  children: PropTypes.string,
};

export default TicketNumber;
