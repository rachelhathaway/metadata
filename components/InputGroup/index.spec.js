import { shallow } from 'enzyme';
import React from 'react';
import InputGroup from './index';

function setup(overrides) {
  const defaultProps = {
    onChange: jest.fn(),
    service: 'facebook',
    records: [
      {
        name: 'title',
        value: 'something'
      },
      {
        name: 'description',
        value: 'something else'
      }
    ]
  };
  const props = { ...defaultProps, ...overrides };
  const wrapper = shallow(<InputGroup {...props} />);
  return {
    wrapper,
    props
  };
}

describe('<InputGroup>', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the service name', () => {
    const { wrapper, props } = setup();
    expect(wrapper.text()).toContain(props.service);
  });

  it('should render an <Input> for each record', () => {
    const { wrapper, props } = setup();
    expect(wrapper.find('Input').length).toEqual(props.records.length);
  });
});
