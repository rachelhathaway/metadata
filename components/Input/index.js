import { func, string } from 'prop-types';
import React from 'react';

function Input({ onChange, ...props }) {
  return (
    <input
      {...props}
      onChange={({ target: { name, value } }) => onChange(name, value)}
    />
  );
}

Input.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  type: string,
  value: string.isRequired,
  onChange: func.isRequired
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
