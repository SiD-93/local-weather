import React, { Component } from 'react';

import WeatherIcon from '../components/WeatherIcon';
import Loading from '../components/Loading';
import WeatherInfo from '../components/WeatherInfo';

class AppContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      geoLocationEnabled: false,
      currentLatitude: 12.98,
      currentLongitude: 77.6,
      weatherData: {
        city: '',
        country: '',
        temperature: null,
        iconCode: null
      }
    };

    this.fetchWeather = this.fetchWeather.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleLocation);
    } else {
      console.error('Could not obtain location. Enable location access when prompted');
      console.warn('Promise I won\'t snoop on you');
    }
  }

  handleLocation(coords) {
    this.setState({
      geoLocationEnabled: true,
      currentLatitude: coords.coords.latitude,
      currentLongitude: coords.coords.longitude
    });
    this.fetchWeather();
  }

  fetchWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.currentLatitude}&lon=${this.state.currentLongitude}&appid=1fe4d321cb3bb40e9bdb6b20303f7dcd&units=metric`)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        weatherData: {
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          iconCode: data.weather[0].id
        }
      });
    })
    .catch(error => console.error(error));
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron weatherCard'>
        {
          (this.state.geoLocationEnabled)
          ? <div>
              <WeatherIcon weatherIconCode={this.state.weatherData.id}/>
              <WeatherInfo {...this.state.weatherData} />
            </div>
          : <Loading />
        }
        </div>
      </div>
    )
  }
}

export default AppContainer;
