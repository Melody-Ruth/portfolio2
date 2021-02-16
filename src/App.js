import './App.css';
import React from 'react';
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import Projects from './components/projects.js';
import Footer from './components/footer.js';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <NavBar/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
