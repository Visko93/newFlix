import React from 'react';
import { Route, Switch  } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import ErrorPage from "./pages/ErrorPage";

import './App.css';

function Routes() {
  return (
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/details"} component={Details} />
        <Route component={ErrorPage} />
      </Switch>
  );
}

export default Routes;
