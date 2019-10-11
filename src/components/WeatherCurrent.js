import React, { Component } from 'react';


export default class WeatherCurrent extends Component {
	constructor(props) {
    super(props);
    this.state = {
	    error: null,
      isLoaded: false,
      weatherData: [],
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
	  if(this.props.city !== prevProps.city) {
		  this.fetchDataFromAPI(this.props.city);
		}
  }
  
  componentDidMount () {
	  this.fetchDataFromAPI(this.props.city);
  }
  
  fetchDataFromAPI (city) {
	  fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&APPID=' + global.WEATHER_API_KEY)
		  .then(res => res.json())
		  .then(
		  	(data) => {
				  this.setState({ 
					  isLoaded: true,
					  weatherData: data
					})
		  	},
			  (error) => {
		      this.setState({
		        isLoaded: true,
		        error
		      });
		    }
		)
  }
	
  render() {
	  const { error, isLoaded, weatherData } = this.state;
	  
    if (error) {
      return <div>Error: {error.message}</div>;
      
    } else if (!isLoaded) {
      return <div>Loading...</div>;
      
    } else {
	    let currTemp = Math.round(weatherData.main.temp);
	    let currHumidity = weatherData.main.humidity;
	    let currWindSpeed = weatherData.wind.speed;
	    let currDesc = weatherData.weather[0].description;
	    
      return (
	      <div>
        	<p>This is weather report for <strong>{weatherData.name}</strong></p>
        	<p>Currently it is {currDesc}</p>
					<p>Current temperature is <strong>{currTemp}°C</strong></p>
					<p>Humidity is <strong>{currHumidity}%</strong></p>
					<p>Wind speed is <strong>{currWindSpeed} meter/sec</strong></p>
				</div>
      );
    }
  }
}
