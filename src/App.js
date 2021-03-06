import React from "react";
import Login from "./components/Login";
import Items from "./components/Items";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
    <>
      <Router>
        <Switch>
            <Route exact path="/"  component={Login}/>
            <Route path="/items"  component={Items}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
