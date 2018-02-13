import { shallow } from 'enzyme';
import React from 'react';
import Link from './index';

function setup(overrides) {
  const defaultProps = {};
  const props = { ...defaultProps, ...overrides };
  const wrapper = shallow(<Link {...props} />);
  return {
    wrapper,
    props
  };
}

describe('<Link>', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
