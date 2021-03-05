import '../App.css';
import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

const Instructions = ({description}) => {
    return (
        <div className="myTextContainer" id="instructions">
            <Typography variant="h5" className="rightColHeader">
            Instructions:
            </Typography>

            <Typography variant="h7">
            &nbsp;&nbsp;&nbsp;&nbsp;{description}
            </Typography>
        </div>
    )
}

export default Instructions;