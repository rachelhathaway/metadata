import { shallow } from 'enzyme';
import React from 'react';
import Button from './index';

function setup(overrides) {
  const defaultProps = {};
  const props = { ...defaultProps, ...overrides };
  const wrapper = shallow(<Button {...props} />);
  return {
    wrapper,
    props
  };
}

describe('<Button>', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
