import '../App.css';
import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

const BasicFacts = ({name, start, end, description}) => {
    return (
        <div>
            <div className="colItem" style={{ textAlign: 'center' }}>
                <Typography variant="h5" className="colItem">
                    {name}
                </Typography>
            </div>
            <div className="dateLine colItem">
            <Typography variant="p">Started: {start}</Typography>
            <Typography variant="p">Last Updated: {end}</Typography>
            </div>
            <div className="colItem">
                <Typography variant="p">
                &nbsp;&nbsp;&nbsp;&nbsp;{description}
                </Typography>
            </div>
        </div>
    )
}

export default BasicFacts;