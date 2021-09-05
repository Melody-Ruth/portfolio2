import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import Projects from './components/projects.js';
import Footer from './components/footer.js';
import ArtStudio from './art_studio/ArtStudio.js';
import Archery from './archery/Archery.js';
import Gingerbread from './gingerbread/Gingerbread.js';
import CaveFlood from './cave_flood/code/CaveFlood.jsx';
import CaveFloodTest from './cave_flood/code/CaveFloodTest.jsx';
import StarTours from './star_tours/StarTours.jsx';
import Beanstalk from './beanstalk/Beanstalk.jsx';
import Stipple from './stipple/Stipple.jsx';
import Puzzle from './puzzle/code/Puzzle';
import { ThemeProvider } from "@material-ui/styles";
import myTheme from './components/myTheme';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CookieFooter from './components/CookieFooter';
import Contact from './components/Contact2';
import CookieInfo from './components/CookieInfo';
import Credits from './components/Credits';

/*export const CookieContext = React.createContext({
  okayedCookies: "false",
  setCookies: () => {}
});*/

//need to add provider if reenabling context

function App() {
  //const [okayedCookies, setCookies] = useState("false");
  //const cookieValue = { okayedCookies, setCookies };
  return (
    <ThemeProvider theme={myTheme}>
      <Router>
      <div className="App" >
        <div className="mainContainer">
          <NavBar/>
          <div className="content">
            <Route path="/portfolio2/" exact component={Projects} />
            <Route path="/portfolio2/about" exact component={About} />
            <Route path="/portfolio2/contact" exact component={Contact} />
            <Route path="/portfolio2/cookies" exact component={CookieInfo} />
            <Route path="/portfolio2/credits" exact component={Credits} />
            <Route path="/portfolio2/Art-Studio" exact component={ArtStudio} />
            <Route path="/portfolio2/Gingerbread" exact component={Gingerbread} />
            <Route path="/portfolio2/Archery" exact component={Archery} />
            <Route path="/portfolio2/Star-Tours" exact component={StarTours} />
            <Route path="/portfolio2/Cave-Flood" exact component={CaveFlood} />
            <Route path="/portfolio2/Beanstalk" exact component={Beanstalk} />
            <Route path="/portfolio2/Puzzle" exact component={Puzzle} />
            <Route path="/portfolio2/Stipple" exact component={Stipple} />
          </div>
          <Footer/>
          <CookieFooter/>
        </div>
      </div>
    </Router>
  </ThemeProvider>
  );
}

export default App;
