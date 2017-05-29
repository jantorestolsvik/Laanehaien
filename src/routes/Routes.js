import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from '../containers/Home';
import Loan from '../containers/Loan';
import Loans from '../containers/Loans';


const Routes = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/loan' component={Loan}/>
      <Route path='/loans' component={Loans}/>
    </Switch>
)

export default Routes;
