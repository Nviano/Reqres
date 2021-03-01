import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: "#fff",
        height: "100%",
        border: '1px dashed #607d8b',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: "rgba(96, 125, 139, 0.6)",
        },
        [theme.breakpoints.only("md")]: {
            width: 'inherit'
        },
    },
    dropzoneBox: {
        height: "inherit",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));