import React from 'react';
import { shallow } from 'enzyme';

import WeatherCard from '../WeatherCard';

const wrapper = shallow(<WeatherCard />);

it('is defined', () => {
  expect(wrapper).toBeDefined();
});

it('is wrapped in a div with class = container', () => {
  expect(wrapper.type()).toEqual('div');
  expect(wrapper.find('.container')).toHaveLength(1);
});

it('wraps the main content in a jumbotron', () => {
  expect(wrapper.find('.jumbotron')).toHaveLength(1);
});
