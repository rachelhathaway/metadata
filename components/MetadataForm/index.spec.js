import { shallow } from 'enzyme';
import React from 'react';
import MetadataForm from './index';

function setup(overrides) {
  const defaultProps = {};
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
});
