import '../../App.css';
import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import ChangeLogEntry from '../../components/ChangeLogEntry';
import BasicFacts from '../../components/BasicFacts';
import Instructions from '../../components/Instructions';
import testPrint from './TestScript.js';

export default class CaveFloodTest extends Component {
  constructor() {
    //this.buttonHandler = new ButtonHandler();
    //this.buttonHandler.writeToConsole();
    testPrint();
  }
  render() {
    return (
        <div className="myContainer">
            <div className="leftCol600">
                <div id="canvas1"></div>
                <BasicFacts name='Cave Flood' start='07/31/2019' end = '12/13/2019' description="     Cave Flood is a game in which the player explores a network of caves in search of crystals (which increase the player's score). The caves are very dark, but a small circle of light around the player is illuminated. The cave system is gradually flooding, and the player's light will go out when underwater. The goal is to make it out of the caves in the shortest time possible with the largest score possible. The player's only guide to the confusing cave system is a map which can only be accessed a few times and which fills in as the player explores the caves. The player can choose to either explore the main, pre-designed level or a randomly generated level.

I coded the game in p5.js. The biggest challenges of the project were implemented physics and collision detection for the player's movement and dealing with image manipulation. For the first challenge, I wanted the player's ball avatar to be able to accelerate, collide, and roll through the caves, which are a mix of rectangular and circular shapes. For the second challenge, I wanted the objects in the cave to change color when underwater with a clear &quot;water line&quot; if only partially submerged. As an additional challenge, I wanted some of the crystal images to be rotated, without rotating the water line. I ended up using the image manipulation libraries of p5.js to edit the transparency of each row of pixels as the water level rose, as well as writing my own rotation function to create rotated versions of my crystal images (rather than rotating them as I drew them). "/>
            </div>
            <div className="rightCol">
                <Instructions description="Move with the arrow keys. When in water, use the down arrow key to stop yourself from floating. Find crystals for extra points. While you're submerged in water, your torch is extinguished. Use the map to check where you are. It will fill in as you explore the caves. You have limited uses of the map, so choose wisely when to look at it."/>
                <div className="myTextContainer colItem">
                    <Typography variant="h5" className="rightColHeader">
                    Changelog:
                    </Typography>
                    <ChangeLogEntry release="1.2.0 12/13/2019" description='Settings page. Randomly generated map is now an option.'/>
                    <ChangeLogEntry release="1.1.1 11/20/2019" description='Map limited to three uses. Map bug fixing.'/>
                    <ChangeLogEntry release="1.1.0 11/11/2019" description='Unlimited use map. (shows a scaled version of the cave system, with only parts the player has been in revealed)'/>
                    <ChangeLogEntry release="1.0.0 11/2/2019" description='Complete first level design, updated menu'/>
                    <ChangeLogEntry release="0.10.0 08/31/2019" description="Light effects: When the player is submerged in water, very dark everywhere. When the player is deep in the caves but not submerged in water, very dark everywhere except a small circle around the player. When the player is near the surface, gradient from very dark to no effect, with it getting lighter the closer to the surface the player is. With this update, all of the major features were in place: player physics, cave types, collectable crystals, water, and lighting effects."/>
                    <ChangeLogEntry release="0.9.0 08/31/2019" description="Game now recognizes multiple keys being pressed at once (so the player can move left and right while jumping without losing momentum)"/>
                    <ChangeLogEntry release="0.8.1 08/31/2019" description="Player no longer appears to be submerged in water while above ground."/>
                    <ChangeLogEntry release="0.8.0 08/24/2019" description="Switched from processing.js to p5.js for better image manipulation libraries. Player now floats in water."/>
                    <ChangeLogEntry release="0.7.0 08/18/2019" description="Added water. The water level gradually rises from not visible to level with the surface, changing the color of the caves and crystals appropriately. Currently no effect on player physics."/>
                    <ChangeLogEntry release="0.6.0 08/11/2019" description="Crystals which can be collected to increase the player's score."/>
                    <ChangeLogEntry release="0.5.0 08/11/2019" description="Colors changed to represent ground, grass and sky. Ability to leave the cave system to go above ground."/>
                    <ChangeLogEntry release="0.4.0 08/10/2019" description="Camera moves to follow the ball when it starts to get out of the screen."/>
                    <ChangeLogEntry release="0.3.4 08/10/2019" description="Rectangular passages that can connect multiple shapes together."/>
                    <ChangeLogEntry release="0.3.3 08/10/2019" description="Reverse capsules"/>
                    <ChangeLogEntry release="0.3.2 08/09/2019" description="Capsule (rectangle with a semi-circle on either end) enclosures."/>
                    <ChangeLogEntry release="0.3.1 08/09/2019" description="Reverse circles (objects rather than enclosures)"/>
                    <ChangeLogEntry release="0.3.0 08/09/2019" description="New circular enclosure for ball to interact with."/>
                    <ChangeLogEntry release="0.2.1 08/09/2019" description="Multiple ramps (can now be at any angle)."/>
                    <ChangeLogEntry release="0.2.0 08/09/2019" description="Ball controlled by arrow keys. Interaction with floor and ramp."/>
                    <ChangeLogEntry release="0.1.0 07/31/2019" description="Menu with working buttons, instructions page."/>
                </div>
            </div>
        </div>
      )
  }
}

