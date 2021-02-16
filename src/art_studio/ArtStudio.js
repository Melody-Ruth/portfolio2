import '../App.css';
import portraitMelody from '../images/cropped3.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  containAbout: {
    padding: "5%",
    display:"flex",
    alignItems:"space-around",
  },
  portrait: {
    display: "inline-block",
    height:350,
  },
  myTextContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft:50,
  },
  myText: {
      margin: 10
  }
});
  

const ArtStudio = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.containAbout}>
        <Paper className={classes.portrait} >
            <img 
                src={portraitMelody} 
                height="100%"
                alt="Portrait of Melody Ruth" 
                className={classes.media}
            />
        </Paper>
        <div className={classes.myTextContainer}>
            <Typography variant="h7" className={classes.myText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl augue, venenatis vitae consequat vel, scelerisque ac neque. Nunc ut quam dignissim, malesuada lectus eget, posuere turpis. Nulla facilisis odio sit amet posuere rhoncus. Praesent vel varius urna. Sed porta, nisl a vestibulum porta, turpis dolor vulputate ligula, vitae rhoncus leo tortor nec lectus. Nulla pharetra placerat enim eget volutpat. Nulla convallis elementum elit, at commodo sapien. Ut iaculis accumsan erat at auctor. Sed porttitor orci dignissim malesuada dapibus.
                Sed id sodales dui, at placerat mi. Mauris pharetra bibendum laoreet. Quisque eget dolor purus. Quisque sollicitudin fringilla eros, id cursus orci ullamcorper ac. Quisque fringilla vitae erat nec sodales. Phasellus a leo in arcu aliquet condimentum. Mauris rutrum enim eget imperdiet placerat. Morbi ultrices massa urna, at cursus eros varius auctor. Nunc volutpat turpis at vulputate placerat. Cras neque quam, dignissim eget urna sed, mollis tempus quam.
            </Typography>

            <Typography variant="h7" className={classes.myText}>
            Nunc placerat ut odio et venenatis. Praesent efficitur a enim quis volutpat. In hac habitasse platea dictumst. Vivamus scelerisque varius laoreet. Aliquam in nulla leo. Fusce arcu est, pretium fermentum commodo sed, iaculis nec velit. Aliquam molestie orci id felis porttitor, ac cursus turpis imperdiet. Morbi ut ex dui. Etiam feugiat convallis tempus.
            Nunc lacinia accumsan enim. Mauris eget dignissim purus, et ultrices leo. Sed mauris magna, bibendum in porttitor a, convallis ut mauris. Donec lacus massa, bibendum nec urna tempor, scelerisque commodo erat. Phasellus auctor nisl ut condimentum convallis. Morbi lobortis mauris quis elit vestibulum tempor. Phasellus tempus sapien non imperdiet volutpat. Nulla dictum orci vitae iaculis tempor. 
            </Typography>
        </div>
    </div>
  )
}

export default ArtStudio;