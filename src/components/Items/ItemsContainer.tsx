import React, { FunctionComponent, useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Item from "../Item";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

const ItemsContainer: FunctionComponent = () => {
  const [state, setState] = useState<any>([]);
  const classes = useStyles();

  useEffect(() => {
    setState([
      { title: "item 1 " },
      { title: "item 2 " },
      { title: "item 3 " },
      { title: "item 4 " },
      { title: "item 5 " },
      { title: "item 6 " },
    ]);
  }, []);
  return (
    <Container className={classes.root}>
      <Grid container justify="center">
        {state.map((item: any) => (
          <Item key={item.title} title={item.title} />
        ))}
      </Grid>
    </Container>
  );
};

export default ItemsContainer;
