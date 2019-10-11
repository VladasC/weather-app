import React, { Component } from 'react';


import {
  Container,
  Row,
  Col
} from "react-bootstrap";


export default class AboutPage extends Component {

  render() {
    return (
      <Container>
	      <Row>
		      <Col><h2>About Page</h2></Col>
	      </Row>
	      
	      
	      <Row>
		      <Col>
			      <p>{"Here you can see how I've used:"}</p>
			      <ul>
					    <li>Use of Bootstrap in ReactJS using <strong>react-bootstrap</strong></li>
					    <li>Page Routing and basic navigation using <strong>react-router</strong></li>
					    <li>Fetching data from OpenWeatherMap API using KEY and 2 endpoints ({"http://api.openweathermap.org"})</li>
					    <li>Display selected weather icon image taken from the server using provided icon name from API</li>
					    <li>Changing state and updating rendered data with new calls to API using different cities</li>
					    <li>File and folder structure with components divided into appropriate files for easier code readability</li>
					    <li>Use of SASS(SCSS) instead of CSS for easier styling (in Header.scss only)</li>
					  </ul>
		      </Col>
		    </Row>
	      
	      
	    </Container>

    )
  }
}
