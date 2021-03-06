import React from "react";
import Login from "./components/Login";
import Items from "./components/Items";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
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
