import React from 'react';

function WeatherIcon(props) {
  return (
    <p className={`wi wi-owm-${props.weatherIconCode} text-center weatherIcon`}></p>
  )
}

WeatherIcon.propTypes = {
  weatherIconCode: React.PropTypes.number.isRequired
}

WeatherIcon.defaultProps = {
  weatherIconCode: 800
}
export default WeatherIcon;
