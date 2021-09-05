import '../App.css';
import React from 'react';
import { Typography } from '@material-ui/core';

const CookieInfo = () => {
    return (
        <div class="headingDiv">
            <div>
                <Typography variant="h4"><b>Cookie Use</b></Typography>
            </div>
            <ul>
                <li><Typography variant="p">Once you've clicked accept, used to stop asking you about the cookies.</Typography></li>
                <li><Typography variant="p">In the Cave Flood game, used to remember user settings.</Typography></li>
                <li><Typography variant="p">In the Jigsaw Puzzle game, used to allow users to save a puzzle and continue it later.</Typography></li>
            </ul>
            <Typography variant="p">This information is never shared with third parties.</Typography>
        </div>
    )
}

export default CookieInfo;