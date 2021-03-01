import React from 'react';
import PropTypes from "prop-types";
import useStyles from "./UserCardComponentStyles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const UserCardComponent = (props) => {
    const { avatar, firstName, lastName, email, emailClass, titleClass, emailTitleText, imgHeight } = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="User Reqres"
                    height={imgHeight}
                    image={avatar}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" className={titleClass}>
                        {`${firstName} ${lastName}`}
                    </Typography>
                    {emailTitleText &&
                        <Typography variant="body2" color="textSecondary" component="p">
                            Email:
                    </Typography>
                    }
                    <Typography variant="body2" color="textSecondary" component="p" className={emailClass}>
                        {email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

UserCardComponent.defaultProps = {
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    emailClass: '',
    titleClass: '',
    emailTitleText: true,
    imgHeight: 250
};
UserCardComponent.propTypes = {
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    emailClass: PropTypes.any,
    titleClass: PropTypes.any,
    emailTitleText: PropTypes.bool,
    imgHeight: PropTypes.number
};

export default UserCardComponent;