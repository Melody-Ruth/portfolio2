import '../App.css';
import archeryThumbnail from '../images/thumbnails/archery_thumbnail.png';
import artStudioThumbnail from '../images/thumbnails/Art_Studio_Thumbnail4.png';
import beanstalkThumbnail from '../images/thumbnails/beanstalk_thumbnail.png';
import caveFloodThumbnail from '../images/thumbnails/cave_flood_thumbnail2.png';
import EoMThumbnail from '../images/thumbnails/elements_of_magic_thumbnail.png';
import fishThumbnail from '../images/thumbnails/fish_collector_thumbnail.png';
import gingerbreadThumbnail from '../images/thumbnails/gingerbread_thumbnail.png';
import puzzleThumbnail from '../images/thumbnails/puzzle_thumbnail.png';
import starToursThumbnail from '../images/thumbnails/star_tours_thumbnail.png';
import stippleThumbnail from '../images/thumbnails/stipple_thumbnail.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    bigContainer: {
        margin: 20,
    },
});
  

const Projects = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.bigContainer}>
        <div className="thumbnailContainer">
            <Card className="thumbnails" >
                <img 
                    className="thumbImgs"
                    src={archeryThumbnail} 
                    height="100%"
                    alt="archery game" 
                />
                <div className="textBox">
                    <Typography variant="h5" className="thumbText2">Archery Game</Typography>
                </div>
            </Card>
            <Card className="thumbnails" >
                <img 
                    className="thumbImgs"
                    src={artStudioThumbnail} 
                    height="100%"
                    alt="Art Studio" 
                />
                <div className="textBox">
                    <Typography variant="h5" className="thumbText2">Art Studio</Typography>
                </div>
            </Card>
            <Card className="thumbnails" >
                <img 
                    className="thumbImgs"
                    src={beanstalkThumbnail} 
                    height="100%"
                    alt="archery game" 
                />
                <div className="textBox">
                    <Typography variant="h5" className="thumbText2">Beanstalk Game</Typography>
                </div>
            </Card>
            <Card className="thumbnails" >
                <img 
                    className="thumbImgs"
                    src={caveFloodThumbnail} 
                    height="100%"
                    alt="archery game" 
                />
                <div className="textBox">
                    <Typography variant="h5" className="thumbText2">Cave Flood Game</Typography>
                </div>
            </Card>
            <Card className="thumbnails" >
                <img 
                    className="thumbImgs"
                    src={EoMThumbnail} 
                    height="100%"
                    alt="archery game" 
                />
                <div className="textBox">
                    <Typography variant="h5" className="thumbText2">Elements of Magic Game</Typography>
                </div>
            </Card>
            <Card className="thumbnails" >
                <img 
                    className="thumbImgs"
                    src={fishThumbnail} 
                    height="100%"
                    alt="archery game" 
                />
                <div className="textBox">
                    <Typography variant="h5" className="thumbText2">Fish Collector Game</Typography>
                </div>
            </Card>
            <Card className="thumbnails" >
                <img 
                    className="thumbImgs"
                    src={gingerbreadThumbnail} 
                    height="100%"
                    alt="archery game" 
                />
                <div className="textBox">
                    <Typography variant="h5" className="thumbText2">Gingerbread Maker</Typography>
                </div>
            </Card>
            <Card className="thumbnails" >
                <img 
                    className="thumbImgs"
                    src={stippleThumbnail} 
                    height="100%"
                    alt="archery game" 
                />
                <div className="textBox">
                    <Typography variant="h5" className="thumbText2">Stipple Image Transformation Tool</Typography>
                </div>
            </Card>
            <Card className="thumbnails" >
                <img 
                    className="thumbImgs"
                    src={puzzleThumbnail} 
                    height="100%"
                    alt="archery game" 
                />
                <div className="textBox">
                    <Typography variant="h5" className="thumbText2">Jigsaw Puzzle Game</Typography>
                </div>
            </Card>
            <Paper className="thumbnails" >
                <img 
                    className="thumbImgs"
                    src={starToursThumbnail} 
                    height="100%"
                    alt="archery game" 
                />
                <div className="textBox">
                    <Typography variant="h5" className="thumbText2">Star Tours Simulation</Typography>
                </div>
            </Paper>
        </div>
    </div>
  )
}

export default Projects;