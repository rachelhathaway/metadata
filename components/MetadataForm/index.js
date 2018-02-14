import { arrayOf, func, shape, string } from 'prop-types';
import React, { Component } from 'react';
import InputGroup from '../InputGroup';

class MetadataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metadata: props.metadata
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(service) {
    return (name, value) =>
      this.setState(state => {
        const metadata = state.metadata.map(data => {
          if (data.service === service) {
            return {
              service,
              records: data.records.map(record => {
                if (record.name === name) {
                  return { name, value };
                }
                return record;
              })
            };
          }
          return data;
        });
        return { metadata };
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateResource();
  }

  render() {
    return (
      <div>
        <h2>{this.props.resource}</h2>
        <form>
          {this.state.metadata.map(data => (
            <InputGroup
              key={data.service}
              onChange={this.handleChange(data.service)}
              {...data}
            />
          ))}
        </form>
      </div>
    );
  }
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
  resource: string.isRequired,
  updateResource: func
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
  ],
  updateResource: () => {}
};

export default MetadataForm;
