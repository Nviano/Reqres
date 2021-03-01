import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    container: {
        borderRadius: 20,
        height: 500,
        display: 'flex',
        justifyContent: 'center'
    },
    centerContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerText: {
        textAlign: 'center'
    },
    title: {
        marginTop: '5rem',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imgContainer: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        overflow: 'hidden',
        borderRadius: 100,
        height: 150,
        width: 150
    }
}));
