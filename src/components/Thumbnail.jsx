import '../App.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Thumbnail = ({title, imgSrc, link}) => {
  return (
    <Card className="thumbnails" component={Link} to={link}>
        <img 
            className="thumbImgs"
            src={imgSrc} 
            height="100%"
            alt={title} 
        />
        <div className="textBox">
            <Typography variant="h5" className="thumbText2">{title}</Typography>
        </div>
    </Card>
  )
}

export default Thumbnail;