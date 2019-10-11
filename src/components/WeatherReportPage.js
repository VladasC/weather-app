import React, { Component } from 'react';


import {
  Container,
  Row,
  Col
} from "react-bootstrap";

import WeatherCurrent from "./WeatherCurrent";
import WeatherFiveDays from "./WeatherFiveDays";

export default class WeatherReportPage extends Component {
  render() {
    return (
      <Container>
	      <Row>
		      <Col><h2>Weather Report</h2></Col>
	      </Row>

	      <Row>
		      <Col><WeatherCurrent></WeatherCurrent></Col>
	      </Row>
	      
	      <Row>
		      <Col><WeatherFiveDays></WeatherFiveDays></Col>
	      </Row>
	    </Container>
    )
  }
}
