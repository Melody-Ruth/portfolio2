import '../App.css';
import React, {Component, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { alpha } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

const CookieFooter = (currTheme) => {
    const theme = useTheme();
    const [okayedCookie, setOkayedCookie] = useState(false);

    useEffect(() => {
        var myCookie = document.cookie;
        var valueString = "";
        var importantPart = myCookie.indexOf("okayedCookies");
        if (importantPart != -1) {
            importantPart += 14;//length of "okayedCookies" + "="
            if (myCookie.indexOf(";",importantPart) != -1) {
                valueString = myCookie.substring(importantPart,myCookie.indexOf(";",importantPart));
            } else {
                valueString = myCookie.substring(importantPart,myCookie.length);
            }
            setOkayedCookie(valueString);
        }
    })

    const checkCookies = () => {
        var d = new Date();
        d.setTime(d.getTime() + (182*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "okayedCookies=true; expires="+expires/*Sat, 25 July 2020 09:55:00 PST*/+"; sameSite=Strict; path=/";
        setOkayedCookie("true");
    }

    return (
        <Box id="cookieDiv" bgcolor={alpha(theme.palette.primary.main, 0.5)} color="white">
            {!okayedCookie && 
            <div id="innerCookieDiv">
            <p class = "text cookieTextThings" id="cookiesText">This website uses cookies to keep of track of user settings and allow users to save their progress in certain games.</p>
            <Button variant="contained" color="primary" className="cookieButton">Learn More</Button>
            <Button variant="contained" color="primary" className="cookieButton" onClick={checkCookies}>Accept</Button>
            </div>
            }
        </Box>
    )
}

export default CookieFooter;