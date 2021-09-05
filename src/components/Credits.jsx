import '../App.css';
import React from 'react';
import { Typography } from '@material-ui/core';

const Credits = () => {
    return (
        <div class="headingDiv">
            <div>
                <Typography variant="h4"><b>Credits</b></Typography>
            </div>
            <Typography variant="p"><a href="https://www.flickr.com/photos/corneliuscz/5022766793/" target="_blank">Tiger Image</a> by Josef Vyb&#237;ral. Used under the <a href="https://creativecommons.org/licenses/by-nc/2.0/" target="_blank">Attribution-NonCommercial 2.0 Generic</a> creative commons license.</Typography>
            <Typography variant="p"><a href="https://github.com/rafgraph/spa-github-pages" target="_blank">Single Page Apps for GitHub Pages</a> redirect script by Rafael Pedicini. Used under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License.</a></Typography>
        </div>
    )
}

export default Credits;