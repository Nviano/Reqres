import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from "./HeaderStyles";

const Header = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} >
            <Typography className={classes.headerText} variant='h4'>Reqres</Typography>
        </Grid>
    )
}

export default Header;