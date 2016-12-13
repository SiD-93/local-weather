import React from 'react';
import { mount } from 'enzyme';

import AppContainer from '../AppContainer';

const wrapper = mount(<AppContainer />);

it('is defined', () => {
  expect(wrapper).toBeDefined();
});

it('renders without crashing', () => {
  mount(<AppContainer />);
});
