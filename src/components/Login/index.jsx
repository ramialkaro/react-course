import React from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  CardActions,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  textField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  cardHeader: {
    fontWeight: 900,
  },
  actions: {
    width: "100%",
  },
  btn: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Login in to your account"
        variant="h3"
        className={classes.cardHeader}
      />
      <CardContent>
        <FormControl>
          <TextField
            placeholder="username"
            variant="outlined"
            className={classes.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <PersonOutlineIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder="password"
            variant="outlined"
            className={classes.textField}
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <LockOpenIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <VisibilityOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox checked color="primary" />}
            label="Remember me"
          />
        </FormControl>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.btn}
		  component={Link}
		  to="/items"
        >
          Login{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Login;
