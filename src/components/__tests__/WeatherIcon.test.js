import React from 'react';
import { shallow } from 'enzyme';

import WeatherIcon from '../WeatherIcon';

const wrapper = shallow(<WeatherIcon />);

it('is defined', () => {
  expect(wrapper.instance()).toBeDefined();
});

it('returns a single p tag', () => {
  expect(wrapper.type()).toEqual('p');
  expect(wrapper.type()).toHaveLength(1);
});

it('uses the weatherIcon class', () => {
  expect(wrapper.find('.weatherIcon')).toHaveLength(1);
});

it('handles props correctly', () => {
  const wrapper = shallow(<WeatherIcon weatherIconCode={804}/>);
  expect(wrapper.instance().props.weatherIconCode).toBe(804);
});

it('manages without props', () => {
  expect(wrapper.instance().props.weatherIconCode).toBe(800);
});
