import React from 'react';

import '../styles/base.css';

function WeatherCard() {
  let conditionId = 801; // random value; will later be passed as a prop.
  return (
    <div className='container'>
      <div className='jumbotron weatherCard'>
        <p className={`wi wi-owm-${conditionId} text-center weatherIcon`}></p>
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

export default WeatherCard;
