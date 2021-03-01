import React from 'react';
import PropTypes from "prop-types";
import useStyles from "./ButtonComponentStyles";

const ButtonComponent = (props) => {

    const { label, onClick, padding, width, background } = props;
    const classes = useStyles();

    return (
        <button style={{ padding: padding, width: width, background: background }} onClick={onClick} className={classes.button}>{label}</button>
    )
}

ButtonComponent.defaultProps = {
    padding: 20,
    width: '100%',
    onClick: () => { },
    label: '',
    background: 'deeppink',
};
ButtonComponent.propTypes = {
    padding: PropTypes.any,
    width: PropTypes.any,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    background: PropTypes.string
};

export default ButtonComponent;