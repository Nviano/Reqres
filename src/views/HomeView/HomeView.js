import React from 'react';
import 'animate.css';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from "./HomeViewStyles";
import ButtonComponent from '../../components/ButtonComponent';
import { useHistory } from 'react-router';
import { USERS_LIST } from '../../config/router/paths';

const HomeView = () => {

    const classes = useStyles();
    const hystory = useHistory();
    const { t } = useTranslation("", { useSuspense: false });

    const onAccessClick = () => {
        hystory.push(USERS_LIST);
    }

    return (
        <Grid container item xs={12} className={classes.centerContent}>
            <Grid item xs={6} className={classes.headerContainer}>
                <Typography variant='h4' className={clsx(classes.header, "animate__animated animate__zoomInDown")}>
                    {t('welcome_to_reqres')}
                </Typography>
            </Grid>
            <Grid container item xs={12} className={classes.centerContent}>
                <Grid item xs={6}>
                    <Typography variant='h5' className={clsx(classes.text, "animate__animated animate__fadeIn animate__delay-2s")}>
                        {t('web_to_interact_with_api_fake')} <a href='https://reqres.in/'>{t('reqres')}</a>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} className={clsx(classes.text, classes.centerContent, "animate__animated animate__fadeInRight animate__delay-3s")}>
                <Grid item xs={2}>
                    <ButtonComponent label={t('start')} onClick={onAccessClick} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomeView;