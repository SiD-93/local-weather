import React from 'react';

function WeatherIcon() {
  let conditionId = 801; // random value; will later be passed as a prop.
  return (
    <p className={`wi wi-owm-${conditionId} text-center weatherIcon`}></p>
  )
}

export default WeatherIcon;
