import { string } from 'prop-types';
import React from 'react';

function Input(props) {
  return <input {...props} />;
}

Input.propTypes = {
  type: string,
  value: string
};

Input.defaultProps = {
  type: 'text',
  value: ''
};

export default Input;
