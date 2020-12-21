import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import s from './Button.pcss';

const styleLookup = {
  download: 'btn-download',
  simple: 'btn-simple',
};

const Button = ({ type, text }) => (
  <button className={cs(s.btn, { [s[styleLookup[type]]]: type })}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
