import React, { Component } from 'react';

import WeatherIcon from '../components/WeatherIcon';

class AppContainer extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron weatherCard'>
          <WeatherIcon />
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    )
  }
}

export default AppContainer;
