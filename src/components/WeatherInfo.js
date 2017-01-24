import React, {Component} from 'react';

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      unit: 'C'
    };

    this.toggleTemp = this.toggleTemp.bind(this);
  }

  toggleTemp(e) {
    e.preventDefault();
    (this.state.unit === 'C') ? this.setState({unit: 'F'}) : this.setState({unit: 'C'});
  }

  getTemperature() {
    if(this.state.unit === 'F') {
      return (this.props.temperature * 9 / 5 + 32).toFixed(2); 
    } else {
      return this.props.temperature;
    }
  }
    
  getUnit() {
    return this.state.unit;
  }

  render() {
    return (
      <div className='text-center'>
        <h2> {this.props.city}, {this.props.country} </h2>
        <h3>
          {this.getTemperature()} °<a className='toggle' onClick={this.toggleTemp}>{this.getUnit()}</a>
        </h3>
      </div>
    );
  }
}

export default WeatherInfo;