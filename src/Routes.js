import React from 'react';
import { Route, Switch  } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./pages/Home";

import './App.css';

function Routes() {
  return (
      <Switch>
        <Menu />
        <Route exact path={"/"} component={Home} />
      </Switch>
  );
}

export default Routes;
