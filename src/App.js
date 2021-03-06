import React from "react";
import Login from "./components/Login";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justify: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Login />
      </Grid>{" "}
    </Grid>
  );
}

export default App;
