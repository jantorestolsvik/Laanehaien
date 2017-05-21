import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/LogIn';
import Loan from '../containers/Loan';
import Loans from '../containers/Loans';


const Routes = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
      <Route path='/loan' component={Loan}/>
      <Route path='/loans' component={Loans}/>
    </Switch>
)

export default Routes;
