import { shallow } from 'enzyme';
import React from 'react';
import Input from './index';

function setup(overrides) {
  const defaultProps = {};
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
});
