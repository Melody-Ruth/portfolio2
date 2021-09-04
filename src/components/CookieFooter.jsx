import '../App.css';
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { alpha } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

const CookieFooter = (currTheme) => {
    const theme = useTheme();
    return (
        <Box id="cookieDiv" bgcolor={alpha(theme.palette.primary.main, 0.5)} color="white">
            <div id="innerCookieDiv">
            <p class = "text cookieTextThings" id="cookiesText">This website uses cookies to keep of track of user settings and allow users to save their progress in certain games.</p>
            <Button variant="contained" color="primary" className="cookieButton">Learn More</Button>
            <Button variant="contained" color="primary" className="cookieButton">Accept</Button>
            </div>
        </Box>
    )
}

export default CookieFooter;