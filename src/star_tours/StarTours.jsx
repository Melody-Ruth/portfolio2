import '../App.css';
import React, {Component} from 'react';
import StarToursCanvas from './StarToursCanvas';
import Typography from '@material-ui/core/Typography';
import ChangeLogEntry from '../components/ChangeLogEntry';
import BasicFacts from '../components/BasicFacts';
import Instructions from '../components/Instructions';

export default class StarTours extends Component {
  render() {
    return (
        <div className="myContainer">
            <div className="leftCol">
                <StarToursCanvas className="colItem"/>
                <BasicFacts name='Star Tours Simulation' start='2019' end = '2019' description='I coded this project in spring 2019. It is based on the Star Tours ride at Disneyland. Each time you watch the simulation, it will choose a different bad guy, first planet, and second planet to display. While working on this project I expanded my graphics skills beyond what I learned making the archery game. In particular, I figured out how to display cubes moving in 3D space. '/>
            </div>
            <div className="rightCol">
                <Instructions description='Click Start to begin the simulation. Click to skip to the next scene. Reload to watch it again.'/>
            </div>
        </div>
      )
  }
}

