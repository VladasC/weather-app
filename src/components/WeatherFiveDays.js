import React, { Component } from 'react';

import {
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

  componentDidUpdate(prevProps, prevState, snapshot) {
	  if(this.props.city !== prevProps.city) {
		  this.fetchDataFromAPI(this.props.city);
		}
  }
  
  componentDidMount () {
	  this.fetchDataFromAPI(this.props.city);
  }
  
  
  fetchDataFromAPI (city) {
	  fetch('http://api.openweathermap.org/data/2.5/forecast?q='+ city +'&units=metric&APPID=' + global.WEATHER_API_KEY)
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

      return (
	      <div className="pb-5">
		      <h4 className="mt-5 mb-3">{"Five day forecast (as of 12:00:00)"}</h4>
		      <Row>
		      	{weatherData.list.map(item => {
			      		let itemTime = item.dt_txt.split(' ')[1];
			      		
			      		if (itemTime === "12:00:00") {
					      	return (
				          	<WeatherItem key={item.dt} weatherRes={item}></WeatherItem>
									)
								} else {
									return "";
								}
							}
						)}
	        </Row>
        </div>
      );
    }
  }
}


class WeatherItem extends Component {
	render () {
		let temp = Math.round(this.props.weatherRes.main.temp);
		
		let dateTime = this.props.weatherRes.dt_txt;
		let dateOnly = dateTime.split(' ')[0];
		let currDate = getCurrDate();
		let iconUrl = "http://openweathermap.org/img/wn/" + this.props.weatherRes.weather[0].icon +"@2x.png";
		
		if (dateOnly === currDate) {
			return "";
		} else {
			return (
				<Col>
					<Card className="mb-3 text-center">
						<Card.Img variant="top" src={iconUrl} style={{width: 50, margin: "0 auto"}} />
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

// Helper functions
var getCurrDate = function() {
	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth()+1; //As January is 0.
	let yyyy = today.getFullYear();
	
	if (dd<10) dd='0'+dd;
	if (mm<10) mm='0'+mm;
	
	return (yyyy+'-'+mm+'-'+dd);
};

