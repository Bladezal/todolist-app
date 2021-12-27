import React from 'react';
import { shallow } from 'enzyme';

import WithLoading from './loading.component';

describe('WithLoading HOC', () => {
  const TestComponent = () => <div className='test' />;
  const WrappedComponent = WithLoading(TestComponent);

  describe('if loading is true', () => {
    it('should render Loading component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists('h2')).toBe(true);
    });

    it('should not render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  });

  describe('if loading is false', () => {
    it('should render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(TestComponent)).toBe(true);
    });

    it('should not render Loading', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists('h2')).toBe(false);
    });
  });
});