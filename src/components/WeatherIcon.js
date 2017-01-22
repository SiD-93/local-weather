import React from 'react';

function WeatherIcon(props) {
  let currentTime = new Date().getHours();
  let timeOfDay = (currentTime >= 6 && currentTime < 19) ? 'day' : 'night';
  return (
    <p className={`wi wi-owm-${timeOfDay}-${props.weatherIconCode} text-center weatherIcon`}></p>
  )
}

WeatherIcon.propTypes = {
  weatherIconCode: React.PropTypes.number.isRequired
}

WeatherIcon.defaultProps = {
  weatherIconCode: 800
}
export default WeatherIcon;
