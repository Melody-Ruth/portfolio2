import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import '../App.css';
import React from 'react';
import myTheme from "./myTheme";
import GitHub from "../images/github.png";
import LinkedIn from "../images/linkedin.png";

const useStyles = makeStyles({
    myToolBar: {
        backgroundColor: "#e6e6e6",
        justifyContent: "space-between",
        flexShrink: 0
    },
});
  

const Footer = ({}) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.myToolBar}>
        <div id="license">
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
                <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"/>
            </a>
            <br />
            <p>This website and the code and images used to create it, unless otherwise noted, were created by Melody Ruth and are licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.</a></p>
        </div>
        <div id="bottomNav">
            <div className="bottomNavCol">
                <Button color="inherit" className="footerButton">Portfolio</Button>
                <Button color="inherit" className="footerButton">About</Button>
            </div>
            <div className="bottomNavCol">
                <Button color="inherit" className="footerButton">Contact</Button>
                <Button color="inherit" className="footerButton">Cookies</Button>
            </div>
        </div>
        <div id="nameSocials">
        <Typography variant="h6" className={classes.myName}>
            Melody Ruth
        </Typography>
        <div id="socials">
            <a href="https://github.com/Melody-Ruth" target="_blank"><img src={GitHub} className="footerImage"/></a>
            <a href="https://www.linkedin.com/in/melodyruth/" target="_blank"><img src={LinkedIn} className="footerImage"/></a>
        </div>
        </div>
    </Toolbar>
  )
}

export default Footer;