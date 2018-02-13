import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import Input from '../Input';

function InputGroup({ service, records }) {
  return (
    <div>
      <h3>{service}</h3>
      <div>
        {records.map(record => (
          <Input
            key={record.name}
            placeholder={record.name}
            value={record.value}
          />
        ))}
      </div>
    </div>
  );
}

InputGroup.propTypes = {
  service: string.isRequired,
  records: arrayOf(
    shape({
      name: string,
      value: string
    })
  ).isRequired
};

export default InputGroup;
