import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import InputGroup from '../InputGroup';

function MetadataForm({ metadata, resource }) {
  return (
    <div>
      <h2>{resource}</h2>
      <div>
        {metadata.map(data => <InputGroup key={data.service} {...data} />)}
      </div>
    </div>
  );
}

MetadataForm.propTypes = {
  metadata: arrayOf(
    shape({
      service: string,
      records: arrayOf(
        shape({
          name: string,
          value: string
        })
      )
    })
  ),
  resource: string.isRequired
};

MetadataForm.defaultProps = {
  metadata: [
    {
      service: 'flipboard',
      records: [
        {
          name: 'title',
          value: ''
        },
        {
          name: 'description',
          value: ''
        },
        {
          name: 'image',
          value: ''
        }
      ]
    }
  ]
};

export default MetadataForm;
