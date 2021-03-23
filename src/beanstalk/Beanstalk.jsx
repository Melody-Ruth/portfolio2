import '../App.css';
import React, {Component} from 'react';
import BeanstalkCanvas from './BeanstalkCanvas.jsx';
import Typography from '@material-ui/core/Typography';
import ChangeLogEntry from '../components/ChangeLogEntry';
import BasicFacts from '../components/BasicFacts';
import Instructions from '../components/Instructions';

export default class Beanstalk extends Component {
  handleKey(e) {
    console.log("hi");
  }
  render() {
    return (
        <div className="myContainer">
            <div className="leftCol800">
                <BeanstalkCanvas className="colItem" onKeyDown={this.handleKey.bind(this)}/>
                <BasicFacts name='Jack and the Beanstalk' start='07/03/20' end = '08/18/20' description="This is a 3D game prototype, building off of what I learned from making the Star Tours simulation. The biggest challenge for this project was rendering the objects.
I calculate which faces of each object to show, what the light level will be on each face based on the position of the &quot;sun,&quot; and what order to draw the objects.
I used the painter's algorithm for the latter.
This unfortunately sometimes gives the wrong result for ordering the objects, so I considered switching to rasterization, but preliminary tests showed that it would cause too much lag on this platform.
Another challenge was collision detection. For collision purposes, the player is represented by a line from their &quot;eyes&quot; to their &quot;feet.&quot; I wrote a method to detect collision between the player and a convex 3D shape.
As part of this program I wrote methods to construct 3D shapes such as regular prisms, approximated spheres, and the &quot;egg&quot; shapes of golden eggs players can collect."/>
            </div>
            <div className="rightCol">
                <Instructions description="Up arrow key to move forward. Down arrow key to move back. Left and right arrow keys to turn. Space to jump. Use the mouse to look around. Get coins to increase your score. 
Clouds will gradually disappear while you are standing on them. If you fall too far you lose. When the sun sets the game is over. Start by climbing the beanstalk (you can jump from leaf to leaf)."/>
            </div>
        </div>
      )
  }
}

