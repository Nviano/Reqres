import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    centerContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        marginTop: '3rem'
    },
    header: {
        margin: theme.spacing(3, 0, 2),
        fontFamily: "Permanent Marker",
        fontSize: 40,
        textAlign: 'center',
        color: 'deeppink',
        textShadow: "1px 1px darkmagenta",
    },
    text: {
        textAlign: 'center',
        margin: theme.spacing(4, 0)
    }
}));