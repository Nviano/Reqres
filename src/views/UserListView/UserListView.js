import React from 'react';
import { Link, generatePath, useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { USER, CREATE_USER } from '../../config/router/paths';
import useUsers from '../../utils/useUsers';
import useStyles from "./UserListViewStyles";
import Header from '../../components/Header';
import UserCardComponent from '../../components/UserCardComponent';
import ButtonComponent from '../../components/ButtonComponent';

const UserListView = () => {

    const query = useUsers();
    const classes = useStyles();
    const history = useHistory();

    if (query.isLoading) {
        return <div>Cargando usuarios</div>
    }

    if (query.isError) {
        return <div>Error cargando los usuarios: {query.error?.message}</div>
    }

    const usersList = query.data.data;

    const onCreateUserClick = () => {
        history.push(CREATE_USER);
    }

    return (
        <Grid container item xs={12} className={classes.paddingT10}>
            <Grid item xs={12} className={classes.marginLR10}>
                <Header />
            </Grid>
            <Grid item xs={3} className={classes.marginLR10}>
                <ButtonComponent label='crear usuario' onClick={onCreateUserClick} />
            </Grid>
            <Grid container item xs={12} className={classes.paddingT10}>
                {usersList.map((user, index) => (
                    <Grid item lg={2} key={index}>
                        <Link className={classes.link} to={generatePath(USER, { id: user.id })}>
                            <UserCardComponent
                                imgHeight={230}
                                email={user.email}
                                firstName={user.first_name}
                                lastName={user.last_name}
                                avatar={user.avatar}
                                emailTitleText={true}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Grid>

    )
}

export default UserListView;