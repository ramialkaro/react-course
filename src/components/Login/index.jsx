import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginFormTemp from "./LoginFormTemp";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <LoginFormTemp />
    </Container>
  );
};

export default Login;
