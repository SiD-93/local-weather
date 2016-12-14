import React from 'react';
import { shallow } from 'enzyme';

import WeatherIcon from '../WeatherIcon';

const wrapper = shallow(<WeatherIcon />);

it('is defined', () => {
  expect(wrapper).toBeDefined();
});

it('returns a single p tag', () => {
  expect(wrapper.type()).toEqual('p');
});

it('uses the weatherIcon class', () => {
  expect(wrapper.find('.weatherIcon')).toHaveLength(1);
});
