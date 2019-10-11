import React, { Component } from 'react';


import {
  Jumbotron,
  Container,
  Nav
} from "react-bootstrap";

import {
	Link
} from "react-router-dom";

import './Header.css';


export default class Header extends Component {
	
	
  render() {
    return (
      <Container>
	      <Nav
					activeKey="/home"
					className="pt-3 pb-3"
				>
					<Nav.Item>
					    <Nav.Link as={Link} to="/">Weather Report</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					    <Nav.Link as={Link} to="/about" eventKey="about">About page</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					  <Nav.Link as={Link} to="/contacts" eventKey="contact">Contacts page</Nav.Link>
					</Nav.Item>
				</Nav>
				
				
		    <Jumbotron>
			    <h1 className="header">{this.props.appName}</h1>
			    <p>{"This is an example app used for portfolio. Here you can see how I've used:"}</p> 
			    <ul>
				    <li>{"Page Routing and basic navigation"}</li>
				    <li>{"Fetching data from Open Weather Map API (http://api.openweathermap.org)"}</li>
				    <li>{"Use of Bootstrap in ReactJS"}</li>
				    <li>{"Folder structure"}</li>
				  </ul>
			  </Jumbotron>
	    </Container>

    )
  }
}
