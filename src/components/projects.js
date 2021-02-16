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
import Thumbnail from './Thumbnail.js';

const useStyles = makeStyles({
    bigContainer: {
        margin: 20,
    },
});
  

const Projects = ({}) => {
  const classes = useStyles();
  return (
        <div align="center">
            <Thumbnail title="Beanstalk Game" imgSrc={beanstalkThumbnail}/>
            <Thumbnail title="Jigsaw Puzzle Game" imgSrc={puzzleThumbnail}/>
            <Thumbnail title="Cave Flood Game" imgSrc={caveFloodThumbnail}/>
            <Thumbnail title="Stipple Image Transformation Tool" imgSrc={stippleThumbnail}/>
            <Thumbnail title="Star Tours Simulation" imgSrc={starToursThumbnail}/>
            <Thumbnail title="Archery Game" imgSrc={archeryThumbnail}/>
            <Thumbnail title="Art Studio Painting Tool" imgSrc={artStudioThumbnail}/>
            <Thumbnail title="Fish Collector Game" imgSrc={fishThumbnail}/>
            <Thumbnail title="Gingerbread House Maker" imgSrc={gingerbreadThumbnail}/>
        </div>
  )
}

export default Projects;