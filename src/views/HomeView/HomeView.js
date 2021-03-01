import React from 'react';
import 'animate.css';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import useStyles from "./HomeViewStyles";
import ButtonComponent from '../../components/ButtonComponent';
import { useHistory } from 'react-router';
import { USERS_LIST } from '../../config/router/paths';

const HomeView = () => {

    const classes = useStyles();
    const hystory = useHistory();

    const onAccessClick = () => {
        hystory.push(USERS_LIST);
    }

    return (
        <Grid container item xs={12} className={classes.centerContent}>
            <Grid item xs={6} className={classes.headerContainer}>
                <Typography variant='h4' className={clsx(classes.header, "animate__animated animate__zoomInDown")}>
                    Bienvenido a Reqres Web
                </Typography>
            </Grid>
            <Grid container item xs={12} className={classes.centerContent}>
                <Grid item xs={6}>
                    <Typography variant='h5' className={clsx(classes.text, "animate__animated animate__fadeIn animate__delay-2s")}>
                        La web donde interactuar con la API fake de <a href='https://reqres.in/'>Reqres.in</a>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} className={clsx(classes.text, classes.centerContent, "animate__animated animate__fadeInRight animate__delay-3s")}>
                <Grid item xs={2}>
                    <ButtonComponent label='comenzar' onClick={onAccessClick} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomeView;