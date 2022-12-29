import React from "react";
import { AppBar, Typography } from "@material-ui/core";

import useStyles from './styles';
import memories from '../images/memories.png';

const Navbar = ()=>{
    const classes =  useStyles();
    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className="">
        <Typography className={classes.heading} variant="h2" align="center">Social Posts</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
    </AppBar>
    )
}

export default Navbar;