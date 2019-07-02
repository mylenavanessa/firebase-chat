import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Chat from '../pages/Chat'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route {...Home.routerOptions} component={Home}/>
      <Route {...Chat.routerOptions} component={Chat}/>
    </Switch>
  </BrowserRouter>
)

export default Router;