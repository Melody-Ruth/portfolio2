import '../App.css';
import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

const ChangeLogEntry = ({release, description}) => {
    return (
        <div className="myTextContainer changelogEntry">
            <Typography variant="h7" style={{ fontWeight: 600 }} className="changeText">{release}</Typography>

            <Typography variant="p" className="changeText">{description}</Typography>
        </div>
    )
}

export default ChangeLogEntry;