import { shallow } from 'enzyme';
import React from 'react';
import InputGroup from './index';

function setup(overrides) {
  const defaultProps = {};
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
});
