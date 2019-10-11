import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import Header from "./components/Header";
import AboutPage from "./components/AboutPage";
import ContactsPage from "./components/ContactsPage";
import WeatherReportPage from "./components/WeatherReportPage";

class App extends React.Component {	
	constructor(props) {
		super(props);
		global.WEATHER_API_KEY = "46bbd0aec1058c63480db8a949a70097";
	}
	
	render() {
		const appName = "Weather App";
		
	  return (
	    //
	    <Router>
	      <div>
		        
					<Header appName={appName}></Header>
	
	        <Switch>
	          <Route path="/about">
	            <AboutPage />
	          </Route>
	          <Route path="/contacts">
	            <ContactsPage />
	          </Route>
	          <Route path="/">
	            <WeatherReportPage />
	          </Route>
	        </Switch>
	      </div>
	    </Router>
	  );
	}
}


export default App;



/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/