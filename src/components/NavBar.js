import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import '../App.css';
import React from 'react';
import myTheme from "./myTheme.js";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    myToolBar: {
      justifyContent: "space-between",
    },
  }));

const NavBar = ({}) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={myTheme}>
        <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.myToolBar}>
            <Typography variant="h5" className={classes.myName}>
              Melody Ruth
            </Typography>
            <div className={classes.navButtons}>
            <Button color="inherit"  component={Link} to={'/'}>Portfolio</Button>
            <Button color="inherit"  component={Link} to={'/about'}>About</Button>
            <Button color="inherit" component={Link} to={'/'}>Contact</Button>
            </div>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    )
}

export default NavBar;