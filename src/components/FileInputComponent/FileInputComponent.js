import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useStyles from "./FileInputComponentStyles";
import { Grid, Typography } from "@material-ui/core";


const FileInputComponent = (props) => {
    const { className, placeholder, files, getInputProps, getRootProps } = props;
    const classes = useStyles();

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );
    return (
        <Grid
            item
            className={classes.mainContainer}
        >
            <div className={classes.dropzoneBox} {...getRootProps()}>
                <input {...getInputProps()} />
                <Typography variant='h6' className={className}>{placeholder}</Typography>
            </div>
        </Grid>
    );
};
FileInputComponent.defaultProps = {
    placeholder: "Arrastre su archivo aquí, o haga click para seleccionarlo",
    className: "",
};
FileInputComponent.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
};
export default FileInputComponent;

