import React, { Component } from 'react';


import {
  Container,
  Row,
  Col,
  Button,
  ButtonToolbar
} from "react-bootstrap";

import WeatherCurrent from "./WeatherCurrent";
import WeatherFiveDays from "./WeatherFiveDays";


export default class WeatherReportPage extends Component {
	constructor(props) {
    super(props);
    this.state = {
	    selectedCity: "London"
    };
  }
  
  handleClick(i) {
	  this.setState({selectedCity: i});
  }
  
  render() {
    return (
      <Container>
	      <Row>
		      <Col>
			      <h2>Weather Report</h2>
			      
			      <p><em>Data taken from OpenWeatherMap API</em></p>
			      
			      <h4>Pick your city:</h4>
			    </Col>
	      </Row>

	      <ButtonToolbar className="mb-3">
		      <Button 
			      className="m-1" variant="info" 
			      onClick={() => this.handleClick("London")}
				    active={this.state.selectedCity === "London"}
				  >
					  London
					</Button>
					
					<Button 
						className="m-1" variant="info" 
						onClick={() => this.handleClick("New York")}
						active={this.state.selectedCity === "New York"}
					>
						New York
					</Button>
		      <Button 
			      className="m-1" variant="info" 
				    onClick={() => this.handleClick("Paris")}
					  active={this.state.selectedCity === "Paris"}
					>
						Paris
					</Button>
		      <Button 
			      className="m-1" variant="info" 
				    onClick={() => this.handleClick("Vilnius")}
					  active={this.state.selectedCity === "Vilnius"}
					>
						Vilnius
					</Button>
	      </ButtonToolbar>

	      <Row>
		      <Col><WeatherCurrent city={this.state.selectedCity}></WeatherCurrent></Col>
	      </Row>
	      
	      <Row>
		      <Col><WeatherFiveDays city={this.state.selectedCity}></WeatherFiveDays></Col>
	      </Row>
	    </Container>
    )
  }
}
