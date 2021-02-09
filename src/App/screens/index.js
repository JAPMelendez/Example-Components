import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import DogsScreen from "./DogsScreen";

const Screens = () => {
  return (
    <Switch>
      <Route exact path="/dogs" component={DogsScreen} />
      <Route exact path="/" component={() => <Redirect to={"/dogs"} />} />
      <Route component={() => <h1>404</h1>} />
    </Switch>
  );
};

export default Screens;
