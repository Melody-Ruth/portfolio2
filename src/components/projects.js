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
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Thumbnail from './Thumbnail.js';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    bigContainer: {
        margin: 20,
    },
});
  

const Projects = ({}) => {
  const classes = useStyles();
  const [thumbnails, setThumbnails] = useState([
    {title: 'Beanstalk Game', img: beanstalkThumbnail, link: '/portfolio2/Beanstalk', available: true},
    {title: 'Jigsaw Puzzle Game', img: puzzleThumbnail, link: '', available: false},
    {title: 'Cave Flood Game', img: caveFloodThumbnail, link: '/portfolio2/Cave-Flood', available: true},
    {title: 'Stipple Image Transformation Tool', img: stippleThumbnail, link: '/portfolio2/Stipple', available: true},
    {title: 'Star Tours Simulation', img: starToursThumbnail, link: '/portfolio2/Star-Tours', available: true},
    {title: 'Archery Game', img: archeryThumbnail, link: '/portfolio2/Archery/', available: true},
    {title: 'Art Studio Painting Tool', img: artStudioThumbnail, link: '/portfolio2/Art-Studio/', available: true},
    {title: 'Gingerbread House Maker', img: gingerbreadThumbnail, link: '/portfolio2/Gingerbread/', available: false},
  ]);
  return (
        <div align="center">
            {thumbnails.map((item,i) => ( item.available ? 
            <Thumbnail key={i} title={item.title} imgSrc={item.img} link={item.link}/> : <span key={i}></span>
            ))}
        </div>
  )
}

export default Projects;