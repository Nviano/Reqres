import React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import useStyles from "./UserDetailViewStyles";
import ButtonComponent from '../../components/ButtonComponent';
import BackgroundImg from '../../assets/sky_stars.jpg';
import UserCardComponent from '../../components/UserCardComponent';

const UserDetailView = () => {

    const classes = useStyles();
    const params = useParams();
    const history = useHistory();
    const { t } = useTranslation("", { useSuspense: false });

    const fetchUser = async () => {
        const response = await fetch(`https://reqres.in/api/users/${params.id}`);
        if (!response.ok) {
            throw new Error(t('an_error_occurred_loading_user'));
        }
        return response.json();
    }

    const query = useQuery('USER', fetchUser);

    if (query.isLoading) {
        return <div>{t('loading_user')}</div>
    }

    if (query.isError) {
        return <div>{t('error_loading_user:')} {query.error?.message}</div>
    }

    const onGoBackClick = () => {
        history.goBack();
    }

    const user = query.data.data;

    return (
        <Grid container item xs={12}>
            <Grid item xs={2}>
                <ButtonComponent padding={10} width='auto' label={t('back')} onClick={onGoBackClick} />
            </Grid>
            <Grid container item xs={12} className={classes.centerContent}>
                <Grid container item xs={4} className={classes.container}>
                    <UserCardComponent
                        imgHeight={250}
                        avatar={BackgroundImg}
                        email={user.email}
                        firstName={user.first_name}
                        lastName={user.last_name}
                        emailTitleText={false}
                        emailClass={classes.centerText}
                        titleClass={classes.title}
                    />
                </Grid>
                <Grid item xs={2} className={classes.imgContainer} >
                    <img className={classes.img} src={user.avatar} alt={`user-${user.first_name}`} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UserDetailView;