import React from 'react';
import { mount } from 'enzyme';

import AppContainer from '../AppContainer';

const wrapper = mount(<AppContainer />);

it('is defined', () => {
  expect(wrapper).toBeDefined();
});

it('renders without crashing', () => {
  wrapper;
});

it('is wrapped in a div with class = container', () => {
  expect(wrapper.find('.container')).toHaveLength(1);
});

it('wraps the main content in a jumbotron', () => {
  expect(wrapper.find('.jumbotron')).toHaveLength(1);
});
