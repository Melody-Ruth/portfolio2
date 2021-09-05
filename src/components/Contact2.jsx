import '../App.css';
import './Contact.css';
import React from 'react';
import { Button, Card, TextField, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const Contact = () => {
    const theme = useTheme();
    return (
        <div id="mainContainer">
            <Card id="form" style={{backgroundColor: theme.palette.secondary.light}}>
                <TextField label="Name" variant="outlined" style={{marginBottom: "2em"}} />
                <TextField label="Email" variant="outlined" style={{marginBottom: "2em"}}/>
                <TextField label="Message" variant="outlined" style={{marginBottom: "2em"}} multiline/>
                <div id="submitDiv">
                    <Button variant="contained" color="primary" id="submitButton">Submit</Button>
                </div>
            </Card>
            <div id="info">
                <Typography variant="p">I'd love to hear from you! Fill out this form, message me on <a href="https://www.linkedin.com/in/melodyruth/" target="_blank">Linkedin</a>, or email me at maruth@ucsd.edu</Typography>
            </div>
        </div>
    )
}

export default Contact;

/*
<Card bgcolor="secondary" id="contactForm">
                <TextField/>
                <TextField/>
                <TextField/>
            </Card>
*/