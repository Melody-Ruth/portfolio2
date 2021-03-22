import '../App.css';
import React, {Component} from 'react';
import ArcheryCanvas from './ArcheryCanvas.js';
import Typography from '@material-ui/core/Typography';
import ChangeLogEntry from '../components/ChangeLogEntry.js';
import BasicFacts from '../components/BasicFacts.js';
import Instructions from '../components/Instructions.js';

export default class Archery extends Component {
  render() {
    return (
        <div className="myContainer">
            <div className="leftCol">
                <ArcheryCanvas className="colItem"/>
                <BasicFacts name='Archery' start='2015' end = '2016' description='I started this program in 2015, intending for it to be a mini-game for another game.
Although I did add it to that game, it also became a big project in its own right,
 as this was the first time I experimented with rendering 3D objects to a 2D canvas.
I used some basic geometry to determine where to draw the targets, grass, and arrow on the screen given their 3D locations.
In 2019 I moved the program onto this website.'/>
            </div>
            <div className="rightCol">
                <Instructions description='Aim with the mouse. Click to shoot. The closer to the center you hit, the more points you will receive.
You only have ten arrows, so use them wisely. Good luck!'/>
            </div>
        </div>
      )
  }
}

