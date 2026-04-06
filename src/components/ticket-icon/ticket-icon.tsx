import PropTypes from 'prop-types';
import { IconWrapper } from './style';

export const Icon = ({ blur, handlerClick, imgPath, alt }) => {
  return (
    <IconWrapper $blur={blur} onClick={handlerClick}>
      <img src={imgPath} alt={alt} />
    </IconWrapper>
  );
};

Icon.propTypes = {
  blur: PropTypes.bool,
  handlerClick: PropTypes.func,
  imgPath: PropTypes.string,
  alt: PropTypes.string,
};
