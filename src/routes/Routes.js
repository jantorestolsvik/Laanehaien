import React, { Component } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from '../containers/Home';
import Signup from '../containers/Signup';


const Routes = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signup' component={Signup}/>
    </Switch>
)

export default Routes;
