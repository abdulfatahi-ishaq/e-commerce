import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from './core/pages/user/signin';
import Signup from './core/pages/user/signup';
import Home from './core/pages/home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signin" exact component={Signin}/>
          <Route path="/signup" exact component={Signup}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
