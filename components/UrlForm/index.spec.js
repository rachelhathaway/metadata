import { shallow } from 'enzyme';
import React from 'react';
import UrlForm from './index';

function setup(overrides) {
  const defaultProps = {};
  const props = { ...defaultProps, ...overrides };
  const wrapper = shallow(<UrlForm {...props} />);
  return {
    wrapper,
    props
  };
}

describe('<UrlForm>', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
