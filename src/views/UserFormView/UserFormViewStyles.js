import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    input: {
        display: 'block',
        boxSizing: 'border-box',
        width: '100%',
        borderRadius: 4,
        border: '1px solid #fff',
        padding: '10px 15px',
        marginBottom: 10,
        fontSize: 14,
    },
    centerContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerText: {
        textAlign: 'center',
        marginTop: '3rem'
    },
    dropzoneText: {
        color: '#000',
        padding: 20,
        '&:hover': {
            color: "#fff",
        },
    },
    img: {
        width: '18rem',
        height: 'inherit'
    },
    spaceBetween: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));