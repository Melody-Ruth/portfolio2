import '../App.css';
import React, {Component} from 'react';
import ArtStudioCanvas from './ArtStudioCanvas';
import Typography from '@material-ui/core/Typography';
import ChangeLogEntry from '../components/ChangeLogEntry';
import BasicFacts from '../components/BasicFacts';
import Instructions from '../components/Instructions';

export default class ArtStudio extends Component {
  render() {
    return (
        <div className="myContainer">
            <div className="leftColBigger">
                <ArtStudioCanvas className="colItem"/>
                <BasicFacts name='Art Studio' start='2015' end = '2019' description='Art Studio is a painting tool. My goal was to provide basic drawing tool functionality while keeping the design intuitive
and fun, with features represented by stylized versions of their real-world counterparts, rather than by menus and buttons.'/>
            </div>
            <div className="rightCol">
                <Instructions description='Click on the brushes to use them. Click and drag to paint, or right click to fill the whole canvas. Click the pencil to use it.
Holding right click with the pencil will erase (draw white). Click the undo button to undo the last stroke or paint fill.
Click on the paint splotches in the palette to change colors, or click on the paint tube to select a color using rgb sliders.
From the color picker, click the save icon to save the current color to one of the four slots. Click on any of the saved colors to switch to that color.
Click on a saved color, then the trashcan icon, to remove it from its slot.
Click the bowl of water to reduce the opacity of the paint. Click the paper towel to reset to fully opaque.'/>
                <div className="myTextContainer colItem">
                    <Typography variant="h5" className="rightColHeader">
                    Changelog:
                    </Typography>
                    <ChangeLogEntry release="2019 1.4" description='Added a "water bowl" and "paper towel" which allow the user to control the opacity of the stroke.'/>
                    <ChangeLogEntry release="2019 1.3" description='Moved from Khan Academy to this website. Added a color picker. Users can select colors, save them to four slots of storage, and remove colors from storage.'/>
                    <ChangeLogEntry release="2015 1.2" description='Added pencil and eraser.'/>
                    <ChangeLogEntry release="2015 1.1" description='Added a "paintbucket" tool: users can right click to cover the entire canvas. Bug fix: paintbrush no longer displays under undo button.'/>
                    <ChangeLogEntry release="2015 1.0" description="First release on Khan Academy using their interactive processing.js editor. Paintbrushes, palette, canvas, painting functionality, undo button."/>
                </div>
            </div>
        </div>
      )
  }
}

