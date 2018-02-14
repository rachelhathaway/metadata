import { shallow } from 'enzyme';
import React from 'react';
import Input from './index';

function setup(overrides) {
  const defaultProps = {
    name: 'name',
    placeholder: 'name',
    value: 'test',
    onChange: jest.fn()
  };
  const props = { ...defaultProps, ...overrides };
  const wrapper = shallow(<Input {...props} />);
  return {
    wrapper,
    props
  };
}

describe('<Input>', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should call props.onChange with the correct arguments', () => {
    const { wrapper, props } = setup();
    const name = 'name';
    const value = 'value';
    wrapper.simulate('change', { target: { name, value } });
    expect(props.onChange).toHaveBeenCalledWith(name, value);
  });
});
