import React from 'react';

function WeatherIcon(props) {
  let timeOfDay = (new Date().getHours() > 19) ? 'night' : 'day';
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
