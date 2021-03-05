import './App.css';
import React from 'react';
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import Projects from './components/projects.js';
import Footer from './components/footer.js';
import ArtStudio from './art_studio/ArtStudio.js';
import Archery from './archery/Archery.js';
import Gingerbread from './gingerbread/Gingerbread.js';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
		<div className="App">
      <div className="mainContainer">
        <NavBar/>
        <div className="content">
          <Route path="/portfolio2/" exact component={Projects} />
          <Route path="/portfolio2/about" exact component={About} />
          <Route path="/portfolio2/Art-Studio" exact component={ArtStudio} />
          <Route path="/portfolio2/Gingerbread" exact component={Gingerbread} />
          <Route path="/portfolio2/Archery" exact component={Archery} />
        </div>
        <Footer/>
		  </div>
    </div>
	</Router>
  );
}

export default App;
