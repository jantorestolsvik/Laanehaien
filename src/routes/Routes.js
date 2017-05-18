import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/LogIn';
import Loan from '../containers/Loan';


const Routes = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
      <Route path='/loan' component={Loan}/>
    </Switch>
)

export default Routes;
