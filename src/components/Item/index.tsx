import React, { FunctionComponent } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  btn: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

interface ItemProps {
  title: String;
}

const Item: FunctionComponent<ItemProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={title} />
      <CardContent>
        <Typography>
          Diam sed ipsum invidunt lorem voluptua. Aliquyam magna aliquyam diam
          eirmod, aliquyam eirmod elitr at consetetur consetetur no, no no.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" className={classes.btn}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
