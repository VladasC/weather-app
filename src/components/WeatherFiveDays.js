import React, { Component } from 'react';


import {
  Container,
  Row,
  Col,
  Card
} from "react-bootstrap";


export default class WeatherCurrent extends Component {
	constructor(props) {
    super(props);
    this.state = {
	    error: null,
      isLoaded: false,
      weatherData: [],
    };
  }

  componentDidMount() {
	  fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=' + global.WEATHER_API_KEY)
	  .then(res => res.json())
	  .then(
	  	(data) => {
		  	console.log(data);
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
	    
      return (
	      <Row>
	      	{weatherData.list.map(item => (
	          <WeatherItem key={item.dt} weatherRes={item}></WeatherItem>
          ))}
        </Row>
      );
    }
  }
}


class WeatherItem extends Component {
	render () {
		let temp = Math.round(convertKelvinToCelsius(this.props.weatherRes.main.temp));
		
		let dateTime = this.props.weatherRes.dt_txt;
		let dateOnly = dateTime.slice().split(' ')[0];
		let currDate = getCurrDate();
		
		if (dateOnly == currDate) {
			return "";
		} else {
			return (
				<Col>
					<Card className="mb-3">
						<Card.Body>
							<Card.Title>{dateOnly}</Card.Title>
							<Card.Text>
								{temp}°C
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			)
		}
	}
}


var getCurrDate = function() {
	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth()+1; //As January is 0.
	let yyyy = today.getFullYear();
	
	if (dd<10) dd='0'+dd;
	if (mm<10) mm='0'+mm;
	
	return (yyyy+'-'+mm+'-'+dd);
};

function convertKelvinToCelsius(kelvin) {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		return (kelvin-273.15);
	}
}
