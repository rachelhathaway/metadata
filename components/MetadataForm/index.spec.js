import { shallow } from 'enzyme';
import React from 'react';
import MetadataForm from './index';

function setup(overrides) {
  const defaultProps = {
    resource: '/some-cool-url',
    metadata: [
      {
        service: 'a',
        records: [
          {
            name: 'a one',
            value: 'something'
          },
          {
            name: 'a two',
            value: 'something else'
          }
        ]
      },
      {
        service: 'b',
        records: [
          {
            name: 'b one',
            value: 'another value'
          }
        ]
      }
    ]
  };
  const props = { ...defaultProps, ...overrides };
  const wrapper = shallow(<MetadataForm {...props} />);
  return {
    wrapper,
    props
  };
}

describe('<MetadataForm>', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the resource', () => {
    const { wrapper, props } = setup();
    expect(wrapper.text()).toContain(props.resource);
  });

  it('should render an <InputGroup> for each service', () => {
    const { wrapper, props } = setup();
    expect(wrapper.find('InputGroup').length).toEqual(props.metadata.length);
  });
});
