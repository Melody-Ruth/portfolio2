import '../App.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
  

const Thumbnail = ({title, imgSrc}) => {
  return (
    <Card className="thumbnails" >
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