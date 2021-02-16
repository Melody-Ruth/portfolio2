import './App.css';
import React from 'react';
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import Projects from './components/projects.js';
import Footer from './components/footer.js';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
		<div className="App">
      <div className="mainContainer">
        <NavBar/>
        <div className="content">
          <Route path="/" exact component={Projects} />
          <Route path="/about" exact component={About} />
        </div>
        <Footer/>
		  </div>
    </div>
	</Router>
  );
}

export default App;
