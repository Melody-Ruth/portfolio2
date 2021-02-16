import '../App.css';
import portraitMelody from '../images/cropped3.jpg';
import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GingerbreadCanvas from './GingerbreadCanvas.js';
import Typography from '@material-ui/core/Typography';

export default class Gingerbread extends Component {
    componentDidMount () {
        const script= document.createElement("script");
    script.src = "../resources/p5.js";
    script.async = true;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "./gingerbreadCanvas.js";
    script2.async = true;
    document.body.appendChild(script2);
    }
  render() {
    return (
        <div className="myContainer">
            <div className="leftCol">
                <GingerbreadCanvas className="colItem"/>
                <div className="colItem">
                    <Typography variant="h5" className="colItem">
                        Gingerbread House Maker
                    </Typography>
                </div>
                <div className="dateLine colItem">
                <Typography variant="p">Started: 2015</Typography>
                <Typography variant="p">Last Updated: 2015</Typography>
                </div>
                <div className="colItem">
                    <Typography variant="p">
                        &nbsp;&nbsp;&nbsp;&nbsp;I coded this project in December 2015 on Khan Academy for their <a href="https://www.khanacademy.org/computer-programming/results-for-contest-gingerbread-house/6528633111445504" class="link">"Gingerbread House" contest</a>, where it was one of the winners.
                        I haven't updated the code since then, but in 2019 I moved it from Khan Academy onto this website.
                    </Typography>
                </div>
            </div>
            <div className="rightCol">
                <div className="myTextContainer colItem">
                    <Typography variant="h5">
                    Instructions:
                    </Typography>
    
                    <Typography variant="h7">
                    Mouse over the icon on the left to open the color menu. Mouse over the icon on the right to open the candy type menu. Click to place a candy.
                    </Typography>
                </div>
            </div>
        </div>
      )
  }
}

