import React from "react";

import screens from "./screens";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Root = ({ children }) => {
  return children;
};

const App = () => {
  return (
    <Router>
      <Route component={Root}>{screens}</Route>
    </Router>
  );
};

export default App;
