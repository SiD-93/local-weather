import React, { Component } from 'react';

import WeatherIcon from '../components/WeatherIcon';

class AppContainer extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron weatherCard'>
          <WeatherIcon /> {/*Passing no props for now.*/}
          <h2 className='text-center'>
            Bumsville, ID
          </h2>
        </div>
      </div>
    )
  }
}

export default AppContainer;
