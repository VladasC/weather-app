import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withRouter } from "react-router";


// Page imports
import Header from "./components/Header";
import AboutPage from "./components/AboutPage";
import LoremIpsumPage from "./components/LoremIpsumPage";
import WeatherReportPage from "./components/WeatherReportPage";



class App extends React.Component {	
	constructor(props) {
		super(props);
		global.WEATHER_API_KEY = "46bbd0aec1058c63480db8a949a70097"; // global variable for OpenWeatherMapAPI
	}
	
	render() {
		const appName = "Weather App";
		const HeaderWithRouter = withRouter(Header);
		
	  return (
	    //
	    <Router>
	      <div>
		        
					<HeaderWithRouter appName={appName}></HeaderWithRouter>
	
	        <Switch>
	          <Route path="/about">
	            <AboutPage />
	          </Route>
	          <Route path="/lorem-ipsum">
	            <LoremIpsumPage />
	          </Route>
	          <Route path="/">
	            <WeatherReportPage />
	          </Route>
	        </Switch>
	        
	        <footer className="text-center p-3">Portfolio Example WeatherApp by Vladas Chockevicius - &copy; 2019</footer>
	      </div>
	    </Router>
	  );
	}
}


export default App;

