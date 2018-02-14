import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';
import Input from '../Input';

function InputGroup({ service, records, onChange }) {
  return (
    <div>
      <h3>{service}</h3>
      <div>
        {records.map(record => (
          <Input
            key={record.name}
            name={record.name}
            value={record.value}
            placeholder={record.name}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

InputGroup.propTypes = {
  onChange: func.isRequired,
  service: string.isRequired,
  records: arrayOf(
    shape({
      name: string,
      value: string
    })
  ).isRequired
};

export default InputGroup;
