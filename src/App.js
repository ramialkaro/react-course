import React from "react";
import Login from "./components/Login";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {},
}));

function App() {
    const classes = useStyles();
    return ( <
        div className = "App" >
        <
        header className = "App-header" > < /header> <
        Grid container justify = "center"
        alignItems = "center" >
        <
        Login / >
        <
        /Grid> < /
        div >
    );
}

export default App;