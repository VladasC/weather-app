import React, { Component } from 'react';
import logo from './../logo.svg';

import {
  Jumbotron,
  Container,
  Nav
} from "react-bootstrap";

import {
	Link
} from "react-router-dom";

import './Header.scss';


export default class Header extends Component {
	
	
  render() {
	  const { location } = this.props;
	  console.log(location.pathname);
    return (
      <Container>
	      
	      <Nav
					activeKey={location.pathname}
					className="pt-3 pb-3"
				>
					<Nav.Item>
					    <Nav.Link as={Link} to="/" eventKey="/">Weather Report</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					    <Nav.Link as={Link} to="/about" eventKey="/about">About page</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					  <Nav.Link as={Link} to="/lorem-ipsum" eventKey="/lorem-ipsum">Lorem Ipsum page</Nav.Link>
					</Nav.Item>
				</Nav>
				
				
		    <Jumbotron>
			    <img src={logo} className="App-logo" alt="logo" />
			    <h1 className="header">{this.props.appName}</h1>
			    <p>This is an example app used for ReactJS portfolio. It is coded by Vladas Chockevicius.</p> 
			    <p>Read more about it in the <Link to="/about">About Page</Link></p>
			  </Jumbotron>
	    </Container>

    )
  }
}
