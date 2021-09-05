import '../App.css';
import React from 'react';
import { Typography } from '@material-ui/core';

const Contact = () => {
    return (
        <div class="headingDiv">
            <div>
                <Typography variant="h4"><b>Contact Me</b></Typography>
            </div>
            <Typography variant="p">Message me on <a href="https://www.linkedin.com/in/melodyruth/" target="_blank">Linkedin</a> or through my email at maruth@ucsd.edu</Typography>
        </div>
    )
}

export default Contact;